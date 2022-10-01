import { Router, Request, Response } from "express";

import {
  createUserHandler,
  findAllUsersHandler,
} from "../controller/user.controller";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "User endpoint working" });
});

userRouter.post("/new" /*, middleware, */, createUserHandler);

userRouter.get("/all", findAllUsersHandler);

export default userRouter;
