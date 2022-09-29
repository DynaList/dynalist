import { Router, Request, Response } from "express";

import { createUserHandler } from "../controller/user.controller";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "User endpoint working" });
});

userRouter.post("/new" /*, middleware, */, createUserHandler);

export default userRouter;
