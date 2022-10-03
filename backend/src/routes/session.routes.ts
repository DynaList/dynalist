import { Router } from "express";

import validate from "../middleware/validateResource";
import { createSessionSchema } from "../schema/session.schema";
import {
  createSessionHandler,
  getSessionsHandler,
} from "../controller/session.controller";

const sessionRouter = Router();

sessionRouter.post("/", validate(createSessionSchema), createSessionHandler);

sessionRouter.get("/", getSessionsHandler);

export default sessionRouter;
