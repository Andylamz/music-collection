import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB Atlas");
  } catch (err) {
    console.log("Something went wrong with connecting to database");
  }
}
