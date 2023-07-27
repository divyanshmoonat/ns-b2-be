const Order = require("../models/order.js");

const createOrder = async (req, res) => {
  const orderBody = req.body;
  const order = new Order({
    ...orderBody,
    userId: req.user._id,
  });
  const result = await order.save();

  res.json({
    success: true,
    message: "Order placed successfully, your order id is " + result._id,
  });
};

const listOrder = async (req, res) => {
  // console.log(req.user);
  const orders = await Order.find({ userId: req.user._id })
    .populate("productId")
    .populate("userId");

  res.json({
    success: true,
    result: orders,
  });
};

module.exports = {
  createOrder,
  listOrder,
};
