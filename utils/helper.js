// Global error handler
const asyncFunction = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(() => {
      console.log("ERROR OCCURED");
      next(); // Next available middleware
      //   res.status(500).json({
      //     success: false,
      //     message: "Something went wrong, please try again later",
      //   });
    });
  };
};

module.exports = {
  asyncFunction,
};
