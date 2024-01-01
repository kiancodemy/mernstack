import express from "express";
import connect from "./config/db.js";
import router from "./routes/productRout.js";
import dotenv from "dotenv";

dotenv.config();
connect();

const port = process.env.PORT;
const app = express();
app.use("/api/products", router);
app.listen(port, () => {
  console.log("it is started");
});
