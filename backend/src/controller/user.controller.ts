import { Request, Response } from "express";

import { CreateUserInput } from "../schema/user.schema";
import { createUser, findAllUsers } from "../service/user.service";
import log from "../utils/logger";

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
