import { ObjectId } from "mongoose";

import GroupModel, { GroupDocument } from "../models/group.model";
import { findUser } from "./user.service";

export async function createGroup(input: GroupDocument) {
  try {
    const newGroup = await GroupModel.create(input);

    for (let i = 0; i < newGroup.members.length; i++) {
      const user = await findUser(newGroup.members[i]);

      if (user.groups.includes(newGroup.id)) continue;

      // await editUser(newGroup.members[i], { groups: [...user.groups, newGroup.id] });
      await newGroup.addMember(user);
    }

    for (let i = 0; i < newGroup.admins.length; i++) {
      const user = await findUser(newGroup.admins[i]);

      if (user.groups.includes(newGroup.id)) continue;

      // await editUser(newGroup.admins[i], { groups: [...user.groups, newGroup.id] });
      await newGroup.addMember(user);
    }

    return newGroup.toJSON();
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function findGroup(id: String): Promise<GroupDocument> {
  try {
    const group = await GroupModel.findById(id).exec();
    if (group === null) {
      throw new Error("Could not find group");
    }
    return group;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function editGroup(
  id: String,
  body: Object
): Promise<GroupDocument> {
  try {
    const group = await GroupModel.findByIdAndUpdate(id, body, { new: true });
    if (group === null) {
      throw new Error("Could not find group to update");
    }
    return group;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function deleteGroup(id: String): Promise<boolean> {
  try {
    const deletedGroup = await GroupModel.findByIdAndDelete(id);
    if (deletedGroup === null) {
      throw new Error("Could not find group to delete");
    }
    return true;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function findAllGroups() {
  return GroupModel.find()
    .populate({
      path: "lists",
      select: "name",
    })
    .populate({
      path: "members",
      select: "name",
    })
    .populate({
      path: "admins",
      select: "name",
    });
}
