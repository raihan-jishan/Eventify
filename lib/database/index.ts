import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL || "";

let cached = (global as any).mongoose || { conn: null, promise: null };

// connectToDatabase function
export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Please define a MongoDB connection");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
