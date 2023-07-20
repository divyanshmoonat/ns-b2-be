const mongoose = require("mongoose");

const productSchema = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: false,
    default: 0,
  },
  ratings: {
    type: Number,
    required: false,
    default: 5,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: false,
    default: [],
  },
};

const Product = mongoose.model("products", productSchema);

module.exports = Product;
