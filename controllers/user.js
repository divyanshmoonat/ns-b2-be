const User = require("../models/user.js");

const registerUser = async (req, res) => {
  const userDetails = req.body;

  const newUser = new User(userDetails);
  const result = await newUser.save();
  // console.log(result);

  res.json({ success: true, msg: "User registered successfully" });
};

const loginUser = (req, res) => {
  res.json({ success: true, msg: "This is a dummy api /user/login" });
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
};
