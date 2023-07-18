const express = require("express");
const router = new express.Router();

const cartController = require("../controllers/cart.js");

router.get("/add", cartController.addToCart);

router.post("/remove", cartController.removeFromCart);

router.post("/change-qty", cartController.changeItemQty);

router.post("/move-to-wishlist", cartController.moveToWishList);

module.exports = router;
