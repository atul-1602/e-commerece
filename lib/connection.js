import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
        `${process.env.MONGO_URI}`,);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Error while connecting to the database:", err);
  }
}
 