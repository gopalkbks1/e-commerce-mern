const express = require("express");
const products = require("./data/products");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json({ products });
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
