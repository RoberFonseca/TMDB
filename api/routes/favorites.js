const express = require("express");
const router = express.Router();
const { User, Movie } = require("../db/models");
const auth = require("../middleware/auth");

router.get("/", auth, (req, res) => {
  User.findOne({ include: Movie, where: req.user.payload }).then((user) =>
    res.send(user.movies)
  );
});

router.get("/:id", auth, (req, res) => {
  User.findOne({ include: Movie, where: { id: req.params.id } }).then((user) =>
    res.send(user.movies)
  );
});

router.delete("/:id", auth, (req, res) => {
  User.findOne({ where: req.user.payload }).then((user) => {
    Movie.findOne({ where: { id: req.params.id } }).then((movie) => {
      movie.removeUser(user);
      res.send(movie);
    });
  });
});

module.exports = router;
