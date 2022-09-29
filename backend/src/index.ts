import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import log from "./utils/logger";
import connectDB from "./utils/connect";
import UserModel from "./models/user.model";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

const port = process.env.PORT;
app.listen(port, async () => {
  log.info(`App running at http://localhost:${port}`);

  await connectDB();
});
