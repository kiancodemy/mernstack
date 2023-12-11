import dotenv from "dotenv";
import Users from "./data/users.js";
import products from "./data/Products.js";
import User from "./modal/Usermodal.js";
import Product from "./modal/Productmodal.js";
import Order from "./modal/orderModel.js";
import connect from "./config/db.js";
dotenv.config();
console.log(1111);

connect();
console.log(2222);

const importdata = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createusr = await User.insertMany(Users);
    const admin = createusr[0]._id;
    const sampleproduct = products.map((product) => {
      return { ...product, user: admin };
    });
    await Product.insertMany(sampleproduct);
    process.exit();
  } catch (error) {
    console.log(`${error} is here `);
    process.exit(1);
  }
};
const destroydata = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("it is destroyed");

    process.exit();
  } catch (error) {
    console.log(`${error} is there`);
    process.exit(1);
  }
};
/*if (process.argv[2] === "-d") {
  destroydata();
} else {
  importdata();
}*/
