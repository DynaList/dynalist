import { Router, Request, Response } from "express";

import validate from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import {
  createUserHandler,
  findAllUsersHandler,
  seedUsersHandler,
} from "../controller/user.controller";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "User endpoint working" });
});

userRouter.post("/new", validate(createUserSchema), createUserHandler);

userRouter.get('/seed/:count', seedUsersHandler)

userRouter.get("/all", findAllUsersHandler);

export default userRouter;
