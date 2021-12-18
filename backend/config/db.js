import mongoose from "mongoose";

const connectDB = async (req, res, next) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected: ${conn.connection.host} at port : ${conn.connection.port}` 
        .cyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red_underline_bold);
    process.exit(1); // this means exit with failure
  }
};

export default connectDB;
