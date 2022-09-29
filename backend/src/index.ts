import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import log from "./utils/logger";
import UserModel from "./models/user.model";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

const port = process.env.PORT;
app.listen(port, async () => {
  log.info(`App running at http://localhost:${port}`);

  let uri = process.env.MONGO_URI;
  if (typeof uri === undefined) {
    console.error(
      "No mongo uri was specified. Please add it to your local .env file under 'MONGO_URI'"
    );
  }

  await mongoose.connect(process.env.MONGO_URI!);
});
