const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const jwtSecretKey = "thisismysecretkey";

const myAuthMiddleware = async (req, res, next) => {
  // Security check
  /**
   * Extract JWT from header
   * Check if token is passed in API headers
   * Validate the expiry of JWT
   * Validate if the JWT is correct
   */
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please pass token in Authorization header",
    });
  }

  const isTokenValid = jwt.verify(token, jwtSecretKey);
  // console.log(isTokenValid);

  const decodedToken = jwt.decode(token);
  // console.log(decodedToken);
  const now = Math.floor(Date.now() / 1000);
  const tokenExp = decodedToken.exp;

  if (now > tokenExp) {
    // Token has expired
    return res.status(401).json({
      success: false,
      message: "Please login to access this resource",
    });
  }

  const user = await User.findById(decodedToken._id);

  if (!user.token || user.token !== token) {
    return res.status(401).json({
      success: false,
      message: "Please login to access this resource",
    });
  }

  req.user = user; // Current logged in user data
  next();
};

module.exports = myAuthMiddleware;
