const Favorite = require("../models/Favorite");

exports.addFavorite = async (req, res) => {
  const { imdbID, Title, Poster, Year } = req.body;

  try {

    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    
    const favorite = new Favorite({ userId: req.user.userId, imdbID, Title, Poster, Year });
    await favorite.save();
    res.json({ message: "Added to Favorites!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFavorites = async (req, res) => {
  const favorites = await Favorite.find({ userId: req.user.userId });
  res.json(favorites);
};
