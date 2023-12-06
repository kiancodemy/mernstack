import mongoose from "mongoose";
const productschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
const User = mongoose.model("User", productschema);
export default User;
