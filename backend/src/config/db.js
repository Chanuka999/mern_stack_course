import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("mongodb connected faild", error);
    process.exit(1);
  }
};
