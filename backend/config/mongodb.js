import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });

  await mongoose.connect("mongodb+srv://sajidhussainrehan9:REHAN786@cluster0.4senq.mongodb.net/");
};

export default connectDB;
