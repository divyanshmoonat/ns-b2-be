const express = require("express");
const responseTime = require("response-time");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const cartRoutes = require("./routes/cart.js");
const userRoutes = require("./routes/user.js");
const productRoutes = require("./routes/product.js");
const orderRoutes = require("./routes/order.js");

const authMiddleware = require("./middlewares/auth.js");
const errorMiddlware = require("./middlewares/error.js");

const app = express(); // http.createServer()

app.use(express.json()); // Middleware to get req.body in json format
app.use(responseTime());
app.use(cors());

app.use("/api/v1/cart", authMiddleware, cartRoutes); // Connect cartRoutes routes with app
app.use("/api/v1/user", userRoutes); // Connect userRoutes routes with app
app.use("/api/v1/product", authMiddleware, productRoutes);
app.use("/api/v1/order", authMiddleware, orderRoutes);

app.use(errorMiddlware);

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

connectDB()
  .then(() => {
    console.log("Connection with Database established!");
  })
  .catch((err) => {
    console.log("UNABLE TO CONNECT TO DATABASE", err);
  });

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
