const Product = require("../models/product.js");

const productsList = async (req, res) => {
  const products = await Product.find({});
//   console.log(products);
  res.json({
    success: true,
    results: products,
  });
};

module.exports = { productsList };
