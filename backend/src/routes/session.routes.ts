import { Router, Request, Response } from "express";

import { createSessionHandler } from "../controller/session.controller";

const sessionRouter = Router();

sessionRouter.post("/", createSessionHandler);

export default sessionRouter;
