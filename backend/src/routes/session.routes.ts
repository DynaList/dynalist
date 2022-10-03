import { Router } from "express";

import validate from "../middleware/validateResource";
import { createSessionSchema } from "../schema/session.schema";
import { createSessionHandler } from "../controller/session.controller";

const sessionRouter = Router();

sessionRouter.post("/", validate(createSessionSchema), createSessionHandler);

export default sessionRouter;
