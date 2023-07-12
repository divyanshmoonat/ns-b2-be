const express = require("express");
const app = express(); // http.createServer()

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

app.get("/user/:userId", (req, res) => {
  console.log(req.params.userId);
  const user = {
    userId: req.params.userId,
  };

  res.json(user);
});

app.post("/user", (req, res) => {
  const responseJson = {
    sucees: true,
    message: "User created successfully",
  };

  res.json(responseJson);
});

app.put("/user", (req, res) => {
  const putResponse = {
    success: true,
    message: "User replaced successfully",
  };

  res.json(putResponse);
});

app.delete("/user", (req, res) => {
  const deleteResponse = {
    success: true,
    message: "User deleted successfully",
  };

  res.json(deleteResponse);
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

const port = 5000;
app.listen(port, () => {
  //server.listen()
  console.log("Server is up and running on port", port);
});
