const mongoose = require("mongoose");

// User who is placing an order?
// The product user is ordering

const orderSchema = {
  address: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
};

const Orders = mongoose.model("orders", orderSchema);

module.exports = Orders;
