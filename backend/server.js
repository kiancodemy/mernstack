import express from "express";

import dotenv from "dotenv";
dotenv.config();

import products from "./data/Products.js";
const port = process.env.PORT;
const app = express();
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});
app.listen(5000, () => {
  console.log("it is started");
});
