import { DocumentDefinition } from "mongoose";
import { omit } from "lodash";

import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(
  input: DocumentDefinition<Omit<UserDocument, "comparePassword">>
) {
  try {
    const newUser = await UserModel.create(input);
    return omit(newUser.toJSON(), "password");
  } catch (error: any) {
    throw new Error(error);
  }
}
