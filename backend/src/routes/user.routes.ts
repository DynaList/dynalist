import { Router, Request, Response } from "express";
import {
  createUserHandler,
  findAllUsersHandler,
  seedUsersHandler,
} from "../controller/user.controller";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "User endpoint working" });
});

userRouter.post("/new" /*, middleware, */, createUserHandler);

userRouter.get('/seeddata/:count', seedUsersHandler)

userRouter.get("/all", findAllUsersHandler);

export default userRouter;
