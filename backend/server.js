import express from "express";
import connect from "./config/db.js";

import dotenv from "dotenv";
dotenv.config();
connect();

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
app.listen(port, () => {
  console.log("it is started");
});
