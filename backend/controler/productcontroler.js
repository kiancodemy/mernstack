import handler from "express-async-handler";

import product from "../modal/Productmodal.js";
const getall = handler(async (req, res, next) => {
  const pro = await product.find({});
  res.json(pro);
});

const getById = handler(async (req, res, next) => {
  const pro = await product.findById(req.params.id);
  if (pro) {
    return res.json(pro);
  }
  res.status(404).json({ message: "not found" });
});

export { getall, getById };
