import express from "express";
import handler from "express-async-handler";
import products from "../data/Products.js";
import product from "../modal/Productmodal.js";
const router = express.Router();
router.get(
  "/",
  handler(async (req, res, next) => {
    const pro = await product.find({});
    res.json(pro);
  })
);
router.get(
  "/:id",
  handler(async (req, res, next) => {
    const pro = await product.findById(req.params.id);
    res.json(pro);
  })
);
export default router;
