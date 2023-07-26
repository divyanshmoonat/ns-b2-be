const User = require("../models/user.js");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const userDetails = {
    email: req.body.email,
    name: req.body.name,
    mobileNo: req.body.mobileNo,
    address: req.body.address,
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

  res.json({
    succes: true,
    message: "User successfully logged In",
  });
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
