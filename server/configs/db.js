import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ Database connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ DB connection error:", err.message);
    });

    await mongoose.connect(`${process.env.MONGODB_URL}/pingup`);
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
  }
};

export default connectDB;
