import mongoose from "mongoose";

const connectDB =  () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
   mongoose.connect(`${process.env.MONGODB_URI}/bgremoval`);
};

export default connectDB;
