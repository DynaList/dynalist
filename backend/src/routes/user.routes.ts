import { Router, Request, Response } from "express";

import { createUserHandler } from "../controller/user.controller";
import UserModel from "../models/user.model";

import { userSeedData } from "../utils/seedData";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "User endpoint working" });
});

userRouter.post("/new" /*, middleware, */, createUserHandler);

userRouter.get('/seeddata', async (req, res) => {

  // Should authenticate this, check if the user is an admin and if not just show a 404 page
  const data = userSeedData()
  const results = []

  // Save each item individually to make sure we get the middleware running
  // Otherwise the passwords will be stored as plaintext
  for (let i = 0; i < data.length; i++) {
    results.push(await data[i].save())
  }

  res.json({
    message: 'Seeded data',
    results: results
  })
})

export default userRouter;
