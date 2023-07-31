const errorHandler = async (req, res, next) => {
  console.log("ERROR HANDLER MIDDLWARE CALLED");
  res.status(500).json({
    success: false,
    message: "Something went wrong, please try again after sometime",
  });
};

module.exports = errorHandler;
