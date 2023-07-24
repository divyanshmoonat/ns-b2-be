const express = require("express");
const router = new express.Router();

// const cartController = require("../controllers/cart.js");
const productsController = require("../controllers/product.js");

router.get("/list", productsController.productsList);

router.get("/details/:productId", productsController.productDetails);

router.post("/add", productsController.addProduct);

router.patch("/edit/:productId", productsController.editProduct);

router.delete("/delete/:productId", productsController.deleteProduct);

module.exports = router;
