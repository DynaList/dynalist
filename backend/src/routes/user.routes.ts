import { Router, Request, Response } from "express";

import validate from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import {
  addGroupHandler,
  createUserHandler,
  deleteUserHandler,
  editUserHandler,
  findAllUsersHandler,
  findUserHandler,
  findUsersByNameHandler,
  seedUsersHandler,
} from "../controller/user.controller";

const userRouter = Router();

// index
userRouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "User endpoint working" });
});

// get all
userRouter.get("/all", findAllUsersHandler);

// seed
userRouter.get('/seed/:count', seedUsersHandler)

// new
userRouter.post("/new", validate(createUserSchema), createUserHandler);

// get by name
userRouter.get("/search/:name", findUsersByNameHandler)

// get one
userRouter.get('/:id', findUserHandler)

// edit one
userRouter.put('/:id', editUserHandler)

// delete one
userRouter.delete('/:id', deleteUserHandler)

// add group to user
userRouter.put('/:userId/groups/:groupId', addGroupHandler)

export default userRouter;
