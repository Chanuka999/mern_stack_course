import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/notedb");
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("mongodb connected faild", error);
  }
};
