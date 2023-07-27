const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user.js");

const jwtSecretKey = "thisismysecretkey";

const registerUser = async (req, res) => {
  const userDetails = {
    email: req.body.email,
    name: req.body.name,
    mobileNo: req.body.mobileNo,
    address: req.body.address,
    role: req.body.role,
  };
  const plainTextPassword = req.body.password;

  /**
   * 1. Import bcrypt
   * 2. Generate salt
   * 3. Hash the password
   */

  const salt = await bcrypt.genSalt(10);
  // console.log("SALT", salt);

  const passwordHash = await bcrypt.hash(plainTextPassword, salt);

  userDetails.password = passwordHash;

  console.log(userDetails);
  // console.log("PASS HASH", passwordHash);

  const newUser = new User(userDetails);
  const result = await newUser.save();
  // console.log(result);

  res.json({ success: true, msg: "User registered successfully" });
};

const loginUser = async (req, res) => {
  const body = req.body;

  const email = body.email;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.json({
      succes: true,
      message: "User is not registered, please create an account first",
    });
  }

  const passwordHash = user.password;
  const loginPassword = body.password;

  const isPasswordCorrect = await bcrypt.compare(loginPassword, passwordHash);

  if (!isPasswordCorrect) {
    return res.json({
      succes: false,
      message: "Incorrect username or password",
    });
  }

  const currentTimeInSeconds = Math.floor(new Date() / 1000);
  const expiryTimeInSeconds = currentTimeInSeconds + 60 * 60; // Adding 1 hr to current time

  const tokenPayload = {
    email: user.email,
    _id: user._id,
    exp: expiryTimeInSeconds,
    role: user.role,
  };
  // Generate a JWT
  const token = jwt.sign(tokenPayload, jwtSecretKey);
  await User.findByIdAndUpdate(user._id, { token: token });
  res.json({
    succes: true,
    message: "User successfully logged In",
    token: token,
  });
};

const logoutUser = async (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = jwt.decode(token);

  await User.findByIdAndUpdate(decodedToken._id, { token: "" });

  // console.log(decodedToken);
  res.json({ success: true });
};

const forgotPassword = (req, res) => {
  res.json({ success: true, msg: "This is a dummy api /user/forgot-password" });
};

const resetPassword = (req, res) => {
  res.json({ success: true, msg: "This is a dummy api /user/reset-password" });
};

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  logoutUser,
};
