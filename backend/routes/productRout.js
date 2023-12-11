import express from "express";
import products from "../data/Products.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.json(products);
});
router.get("/:id", (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});
export default router;
