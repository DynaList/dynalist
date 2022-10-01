import { DocumentDefinition, FilterQuery } from "mongoose";
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

export async function findAllUsers() {
  return UserModel.find().lean();
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });

  if (!user) return false;

  const isValid = await user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), "password");
}
