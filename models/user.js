const mongoose = require("mongoose");

const userSchema = {
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: false,
    default: "",
  },
};

const User = mongoose.model("users", userSchema);

module.exports = User;
