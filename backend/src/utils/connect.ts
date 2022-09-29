import mongoose from "mongoose";

import log from "./logger";

async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    log.info("Dababase connected");
  } catch (error) {
    log.error(error);
  }
}

export default connectDB;
