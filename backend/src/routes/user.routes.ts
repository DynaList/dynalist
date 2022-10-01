import { Router, Request, Response } from "express";
import { userSeedData } from "../utils/seedData";
import {
  createUserHandler,
  findAllUsersHandler,
} from "../controller/user.controller";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "User endpoint working" });
});

userRouter.post("/new" /*, middleware, */, createUserHandler);

userRouter.get('/seeddata/:count', async (req, res) => {
  // Should authenticate this, check if the user is an admin and if not just show a 404 page
  let count = req.params.count

  const data = userSeedData(Number(count))
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

userRouter.get("/all", findAllUsersHandler);

export default userRouter;
