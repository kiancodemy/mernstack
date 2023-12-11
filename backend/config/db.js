import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODBURL);
    console.log("connected to mongo");
  } catch (error) {
    console.log(`the error is ${error.message}`);
    process.exit(1);
  }
};
export default connect;
