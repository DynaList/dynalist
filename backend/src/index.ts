import express from "express";
import cors from 'cors';

import log from "./utils/logger";
import connectDB from "./utils/connect";
import routes from "./routes";

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors())

const port = process.env.PORT;
app.listen(port, async () => {
  log.info(`App running at http://localhost:${port}`);

  await connectDB();

  routes(app);
});
