import { Request, Response } from "express";

import log from "../utils/logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    // const newUser = createUser() --> Create a service for adding new users
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
}
