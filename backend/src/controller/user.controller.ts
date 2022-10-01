import { Request, Response } from "express";

import { CreateUserInput } from "../schema/user.schema";
import { createUser, findAllUsers } from "../service/user.service";
import log from "../utils/logger";
import { userSeedData } from "../utils/seedData";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const newUser = await createUser(req.body);
    return res.send(newUser);
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
}

export async function findAllUsersHandler(req: Request, res: Response) {
  const user = await findAllUsers();

  return res.send(user);
}

export async function seedUsersHandler(req: Request, res: Response) {
    // Should authenticate this, check if the user is an admin and if not just show a 404 page
    let count = req.params.count

    const data = userSeedData(Number(count))
    const results = []
  
    // Save each item individually to make sure we get the middleware running
    // Otherwise the passwords will be stored as plaintext
    for (let i = 0; i < data.length; i++) {
      results.push(await data[i].save())
    }
  
    res.status(201).json({
      message: 'Seeded data',
      results: results
    })
}