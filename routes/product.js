const express = require("express");
const router = new express.Router();

// const cartController = require("../controllers/cart.js");
const productsController = require("../controllers/product.js");

router.get("/list", productsController.productsList);

module.exports = router;
