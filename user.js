const express = require("express");
const router = express.Router();

router.get("/user/:userId", (req, res) => {
  console.log(req.params.userId);
  const user = {
    userId: req.params.userId,
  };

  res.json(user);
});

router.post("/user", (req, res) => {
  console.log(req.body);
  // console.log("BBBBB");
  const responseJson = {
    sucees: true,
    message: "User created successfully",
  };

  res.json(responseJson);
});

router.put("/user", (req, res) => {
  const putResponse = {
    success: true,
    message: "User replaced successfully",
  };

  res.json(putResponse);
});

router.delete("/user", (req, res) => {
  const deleteResponse = {
    success: true,
    message: "User deleted successfully",
  };

  res.json(deleteResponse);
});

module.exports = router;
