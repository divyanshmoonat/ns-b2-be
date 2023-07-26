const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewTitle: String,
  reviewDescription: String
});

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
    max: 30,
    // validate: () => {} // Custom validators in mongoose
  },
  rating: {
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
  reviews: [reviewSchema]
};

const Product = mongoose.model("products", productSchema);

module.exports = Product;
