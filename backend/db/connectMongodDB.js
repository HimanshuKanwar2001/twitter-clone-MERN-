import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectMongoDB = async () => {
  try {
    console.log("insde db module", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Error connection to mongoDB :", err.message);
    process.exit(1);
  }
};

export default connectMongoDB;
