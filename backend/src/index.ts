import express from "express";
import dotenv from "dotenv";

import log from "./utils/logger";
import connectDB from "./utils/connect";
import routes from "./routes";

dotenv.config();

const app = express();

const port = process.env.PORT;
app.listen(port, async () => {
  log.info(`App running at http://localhost:${port}`);

  await connectDB();

  routes(app);
});
