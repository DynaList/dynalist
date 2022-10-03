import { DocumentDefinition, FilterQuery } from "mongoose";
import { omit } from "lodash";

import UserModel, { UserDocument } from "../models/user.model";

// new user
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

// find one
export async function findUser(id: String): Promise<UserDocument> {
	try {
		const user = await UserModel.findById(id).exec()
		if (user === null) {
			throw new Error("Could not find user")
		}
		return user
	} catch (error: any) {
		throw new Error(error)
	}
}

// edit one
export async function editUser(id: String, body: Object): Promise<UserDocument> {
  try {
    const user = await UserModel.findByIdAndUpdate(id, body, { new: true })
    if (user === null) {
      throw new Error("Could not find user to update")
    }
    return user
  } catch (error: any) {
    throw new Error(error)
  }
}

// delete one
export async function deleteUser(id: String): Promise<boolean> {
	try {
		const deletedUser = await UserModel.findByIdAndDelete(id)
		if (deletedUser === null) {
			throw new Error("Could not find user to delete")
		}
		return true
	} catch (error: any) {
		throw new Error(error)
	}
}

// get all
export async function findAllUsers() {
  return UserModel.find().lean();
}

// validate password
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

