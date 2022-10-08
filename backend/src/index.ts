import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import deserializeUser from "./middleware/deserializeUser";
import log from "./utils/logger";
import connectDB from "./utils/connect";
import routes from "./routes";

require("dotenv").config();

const app = express();

app.use(deserializeUser);
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
app.listen(port, async () => {
  log.info(`App running at http://localhost:${port}`);

  await connectDB();

  routes(app);
});
