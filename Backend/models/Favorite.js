const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  imdbID: String,
  Title: String,
  Poster: String,
  Year: String,
});

module.exports = mongoose.model("Favorite", favoriteSchema);
