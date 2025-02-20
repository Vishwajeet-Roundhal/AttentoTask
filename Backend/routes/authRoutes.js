const express = require("express");
const { register, login } = require("../controllers/authController");
const { addFavorite, getFavorites } = require("../controllers/favoriteController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/favorites", authMiddleware, addFavorite);
router.get("/favorites", authMiddleware, getFavorites);

module.exports = router;
