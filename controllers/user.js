const registerUser = (req, res) => {
  res.json({ success: true, msg: "This is a dummy api /user/register" });
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
