const express = require("express");

const cartRoutes = require("./routes/cart.js");
const userRoutes = require("./routes/user.js");

const authMiddleware = require("./middlewares/auth.js");

const app = express(); // http.createServer()

app.use("/api/v1/cart", cartRoutes); // Connect cartRoutes routes with app
app.use("/api/v1/user", authMiddleware, userRoutes); // Connect userRoutes routes with app

app.use(express.json()); // Middleware to get req.body in json format

// e-Commerce
/**
 * cart : "/api/v1/cart/add", "/api/v1/cart/remove"
 * user : "/api/v1/user/register", "/api/v1/user/login"
 * chekcout :
 * listing/details : "/api/v1/product"
 */

const port = 5000;
app.listen(port, () => {
  //server.listen()
  console.log("Server is up and running on port", port);
});
