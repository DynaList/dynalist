import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import {
  createUser,
  deleteUser,
  editUser,
  findAllUsers,
  findUser,
  findUsersByName,
} from "../service/user.service";
import log from "../utils/logger";
import { userSeedData } from "../utils/seedData";

// create one
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

// find one
export async function findUserHandler(req: Request, res: Response) {
  try {
    const user = await findUser(req.params.id);

    if (user === null) {
      return res.status(404).send({ message: "Error: Could not find user" });
    }

    return res.status(200).send(user);
  } catch (error: any) {
    log.error(error);

    return res.status(404).send(error.message);
  }
}

// find one by name
export async function findUsersByNameHandler(req: Request, res: Response) {
  try {
    const users = await findUsersByName(req.params.name);
    return res.status(200).send({
      count: users.length,
      results: users,
    });
  } catch (error: any) {
    log.error(error);
    return res.status(400).send(error.message);
  }
}

// edit one
export async function editUserHandler(req: Request, res: Response) {
  try {
    const updatedUser = await editUser(req.params.id, req.body);
    return res.status(200).send(updatedUser);
  } catch (error: any) {
    log.error(error);
    return res.status(400).send(error.message);
  }
}

// delete one
export async function deleteUserHandler(req: Request, res: Response) {
  try {
    const success = await deleteUser(req.params.id);
    if (success) {
      return res
        .status(200)
        .send({ message: "Successfully deleted user", success: true });
    } else {
      return res
        .status(400)
        .send({ message: "Error deleting user", success: false });
    }
  } catch (error: any) {
    log.error(error);
    return res.status(400).send(error.message);
  }
}

// find all
export async function findAllUsersHandler(req: Request, res: Response) {
  const user = await findAllUsers();

  return res.send(user);
}

// seed
export async function seedUsersHandler(req: Request, res: Response) {
  // Should authenticate this, check if the user is an admin and if not just show a 404 page
  let count = req.params.count;

  const data = userSeedData(Number(count));
  const results = [];

  // Save each item individually to make sure we get the middleware running
  // Otherwise the passwords will be stored as plaintext
  for (let i = 0; i < data.length; i++) {
    results.push(await data[i].save());
  }

  res.status(201).json({
    message: "Seeded data",
    results: results,
  });
}
