import { DocumentDefinition } from "mongoose";

import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(
  input: DocumentDefinition<Omit<UserDocument, "comparePassword">>
) {
  try {
    const newUser = await UserModel.create(input);
    console.log(newUser);
    return newUser;
  } catch (error: any) {
    throw new Error(error);
  }
}
