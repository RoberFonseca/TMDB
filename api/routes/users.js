const express = require("express");
const { generateToken, validateToken } = require("../config/tokens");
const router = express.Router();
const { User, Movie } = require("../db/models");
const auth = require("../middleware/auth");

router.get("/", (req, res, next) => {
  User.findAll().then((users) => res.send(users));
});

router.post("/register", (req, res, next) => {
  User.create(req.body).then((user) => res.send(user));
});

router.post("/logout", (req, res, next) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);

    user.validatePassword(password).then((isvalid) => {
      if (!isvalid) return res.sendStatus(401);

      const payload = {
        email: user.email,
      };
      const token = generateToken(payload);
      res.cookie("token", token);

      res.send(payload);
    });
  });
});

router.post("/favorites", auth, (req, res) => {
  const { title, image } = req.body;
  User.findOne({ where: req.user.payload}).then((user) => {
    Movie.findOrCreate({ where: { title, image } }).then((result) => {
      const movie = result[0];
      movie.addUser(user);
      res.send(movie);
    });
  });
});

router.get("/me", auth, (req, res) => {
  res.send(req.user.payload);
});

router.get("/:id", (req, res, next) => {
  User.findByPk(req.params.id).then((user) => res.send(user));
});

module.exports = router;
