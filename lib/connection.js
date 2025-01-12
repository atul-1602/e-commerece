import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mydb.qemww.mongodb.net/ecomm?retryWrites=true&w=majority`);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Error while connecting to the database:", err);
  }
}
 