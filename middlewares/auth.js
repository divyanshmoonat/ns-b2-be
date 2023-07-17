const myAuthMiddleware = (req, res, next) => {
  // Security check
  if (req.query.apiKey === "f234r-asfe243f-af42we4f") {
    next();
  } else {
    res.status(401).json({
      messsage: "API Key is required, please paas it in URL",
    });
  }
};

module.exports = myAuthMiddleware;
