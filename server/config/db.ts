import mongoose from "mongoose";
import "colors";

const dbURL : string = "mongodb://localhost:27017/myNextDoor";

export async function connectDB(): Promise<void> {
  await mongoose.connect(dbURL);
  console.log("Database connected successfully".cyan.italic);
}

export async function stopDB(): Promise<void> {
  await mongoose.connection.close();
}
