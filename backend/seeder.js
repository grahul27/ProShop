import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import { exit } from "process";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    //get details of admin users, because when adding products to DB, each product should have the Admin userID
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((p) => {
      return { ...p, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log(`Data imported`.green.inverse);
    exit();
  } catch (error) { 
    console.error(`${error}`.red.inverse);
    exit();
    //   Basically if you want to exit with success use 0 if you want to exit with failure use 1.
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log(`Data destroyed`.red.inverse);
    exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
