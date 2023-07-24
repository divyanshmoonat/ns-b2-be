const Product = require("../models/product.js");

const productsList = async (req, res) => {
  const pageSize = Number(req.query.pageSize);

  let rating = req.query.rating;
  rating = Number(rating);
  // console.log(rating);
  let price = Number(req.query.price);
  let pageNo = Number(req.query.pageNo);
  let searchKey = req.query.searchKey;
  console.log(searchKey);
  // const productList = await Product.find({}); // Fetch all the records present in Products collection
  const query = {
    rating: {
      $gte: rating,
    },
    price: {
      $gte: price,
    },
    title: {
      $regex: new RegExp(searchKey),
      $options: "i",
    },
  };

  const skip = (pageNo - 1) * pageSize; //Offset

  const productList = await Product.find(query).skip(skip).limit(pageSize);

  const total = await Product.find(query).count();

  // Find all the products whose ratings are greater than 4
  // console.log(productList.length);
  res.json({
    success: true,
    total: total,
    pageSize: pageSize,
    currentPage: pageNo,
    results: productList,
  });
};

const productDetails = async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await Product.findById(productId);
    res.json({
      success: true,
      result: product,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      result: "Product not found",
    });
  }
};

const addProduct = async (req, res) => {
  // Get the details from req body and insert it into DB
  const productData = req.body;

  if (productData.title == null || productData.title == undefined) {
    return res.status(400).json({
      success: false,
      message: "Title field is required",
    });
  }
  // console.log(productData);
  try {
    const product = new Product({
      title: productData.title,
      price: productData.price,
      thumbnail: productData.thumbnail,
      category: productData.category,
      brand: productData.brand,
      stock: productData.stock,
    });

    const result = await product.save();
    // console.log(result._id);

    res.json({
      success: true,
      message: `New item added with id ${result._id}`,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const editProduct = async (req, res) => {
  try {
    // Query first approach
    const productId = req.params.productId;
    console.log(productId);

    // const product = await Product.findById(productId);
    // if (!product) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid product ID/ Product not found",
    //   });
    // }

    // Update first
    const findObj = {
      // _id: product._id,
      _id: productId,
    };

    const updateObj = req.body;

    const updatedProduct = await Product.updateOne(findObj, updateObj);

    // console.log(updatedProduct);
    // Product.findOneAndUpdate(); // https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong, please try again after sometime",
    });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.productId;

  const result = await Product.findByIdAndDelete(productId);

  /**
   * findOneAndDelete(findObj)
   * deleteMany(findObj)
   */
  
  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Product with given ID does not exists",
    });
  }

  console.log(result);
  res.json({
    success: true,
    message: `Product with Id ${result._id} deleted successfully`,
  });
};

module.exports = {
  productsList,
  productDetails,
  addProduct,
  editProduct,
  deleteProduct,
};
