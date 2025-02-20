const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  const token = authHeader.split(" ")[1]; // Extract token after 'Bearer'
  console.log(token);

  if (!token) return res.status(401).json({ error: "Access Denied" });

  const verified = jwt.verify(token, process.env.JWT_SECRET);
  console.log("jwt secret:", process.env.JWT_SECRET);

  console.log("user:", verified);

  req.user = verified;
  next();
};

module.exports = authMiddleware;
