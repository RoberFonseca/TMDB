const db = require("..");
const S = require("sequelize");
const bcrypt = require("bcrypt");

class User extends S.Model {
  validatePassword(password) {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password);
  }

}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", function(user) {
  const salt = bcrypt.genSaltSync()
  user.salt = salt;
  return bcrypt.hash(user.password, user.salt).then(hash => user.password=hash)
})

module.exports = User;
