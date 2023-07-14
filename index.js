const express = require("express");
const app = express(); // http.createServer()
const fs = require("node:fs");

const userRouter = require("./user.js");

require("dotenv").config();

console.log(process.env.SERCRET_NUMBER); // Environment variable

app.use(express.json()); // Middleware to get req.body in json format

app.use(express.static("public_files")); // Middleware to server files from a particular folder

app.use(express.urlencoded({ extended: true })); // Middleware to get url encoded data

const myAuthMiddleware = (req, res, next) => {
  console.log(req.url);
  // Security check
  if (req.query.apiKey === "f234r-asfe243f-af42we4f") {
    next();
  } else {
    res.status(401).json({
      messsage: "API Key is required, please paas it in URL",
    });
  }
};

// app.use(myAuthMiddleware);

app.use(userRouter);

app.get("/get-number", (req, res) => {
  const secretNumber = process.env.SERCRET_NUMBER;
  if (secretNumber) {
    res.json({
      number: secretNumber,
    });
  } else {
    res.status(404).json({
      err: "Not found",
    });
  }
});

app.get("/", (req, res) => {
  res.send("The express server is up and running");
});

app.get("/todos", (req, res) => {
  const todo = {
    id: 1,
    title: "Lorem Ipsum",
    description: "aljsdfl kajsdflkjasdlf jasdfl kjasdflk",
    completed: false,
  };
  res.json(todo);
});

const products = [
  { id: 1, name: "Product Name", price: 2000, quantity: 50 },
  { id: 2, name: "Product Name", price: 2000, quantity: 50 },
  { id: 3, name: "Product Name", price: 2000, quantity: 50 },
];

app.get("/product/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = products.find((product) => product.id == productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/get-file-list", (req, res) => {
  res.json({
    sample: "http://localhost:5000/sample.txt",
    image1: "http://localhost:5000/callstack.png",
    image2: "http://localhost:5000/Linkedlist.png",
  });
  // fs.readFile("./files/sample.txt", (err, data) => {
  //   if (err) {
  //     res.status(400).json({
  //       message: "Something went wrong, please try again later",
  //     });
  //   } else {
  //     const fileData = data.toString();
  //     res.json({
  //       sample: 'http://localhost:5000/sample.txt',
  //       image1: 'http://localhost:5000/callback.png',
  //       image2: 'http://localhost:5000/Linkedlist.png',
  //     });
  //   }
  // });
});

const port = 5000;
app.listen(port, () => {
  //server.listen()
  console.log("Server is up and running on port", port);
});
