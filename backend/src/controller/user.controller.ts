import { Request, Response } from "express";

import { createUser } from "../service/user.service";
import log from "../utils/logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const newUser = await createUser(req.body);
    return res.send(newUser);
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
}
