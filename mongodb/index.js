import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected👍👍");
    return;
  }

  try {
    // Ensure you're using process.env.MONGODB_URI correctly here
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI environment variable is not defined.");
    }

    await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB is connected successfully 👍👍");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
