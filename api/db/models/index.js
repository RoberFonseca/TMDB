const User = require("./User");
const Movie = require("./Movie");

User.belongsToMany(Movie, {through: "favorites"})
Movie.belongsToMany(User, {through: "favorites"})

module.exports = { User, Movie };
