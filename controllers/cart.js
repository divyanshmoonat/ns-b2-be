const addToCart = (req, res) => {
  res.json({ success: true, msg: "This is a dummy api for /cart/add" });
};

const removeFromCart = (req, res) => {
  res.json({ success: true, msg: "This is a dummy api /cart/remove" });
};

const changeItemQty = (req, res) => {
  res.json({ success: true, msg: "This is a dummy api /cart-change-qty" });
};

const moveToWishList = (req, res) => {
  res.json({
    success: true,
    msg: "This is a dummy api /cart/move-to-wishlist",
  });
};

module.exports = {
  addToCart,
  removeFromCart,
  changeItemQty,
  moveToWishList,
};
