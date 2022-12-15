const db = require("..");
const S = require("sequelize");

class Movie extends S.Model {}

Movie.init(
  {
    title: {
      type: S.STRING,
      allowNull: false,
    },
    image: {
      type: S.STRING,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "movie" }
);

module.exports = Movie;
