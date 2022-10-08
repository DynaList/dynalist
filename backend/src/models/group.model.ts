import mongoose, { Schema, Types } from "mongoose";
import { editUser, findUser } from "../service/user.service";
import { ListDocument } from "./list.model";
import { UserDocument } from "./user.model";

export interface GroupDocument extends mongoose.Document {
  name: string;
  lists: Array<ListDocument["_id"]>;
  members: Array<UserDocument["_id"]>;
  admins: Array<UserDocument["_id"]>;
  addMember(user: UserDocument): Promise<boolean>;
  addList(list: ListDocument): Promise<boolean>;
}

const groupSchema = new mongoose.Schema<GroupDocument>({
  name: {
    type: String,
    require: true,
  },
  lists: [
    {
      type: String,
      ref: "List",
    },
  ],
  members: [
    {
      type: String,
      ref: "User",
    },
  ],
  admins: [
    {
      type: String,
      ref: "User",
    },
  ],
});

// groupSchema.pre("save", async function (next) {
//   const group = this as GroupDocument;

//   for (let i = 0; i < group.members.length; i++) {
//     const user = await findUser(group.members[i]);

//     console.log(
//       "The user groups: ",
//       user.groups,
//       " and the group id: ",
//       group.id
//     );
//     if (user.groups.includes(group.id)) continue;

//     // await editUser(group.members[i], { groups: [...user.groups, group.id] });
//     await group.addMember(user);
//   }

//   for (let i = 0; i < group.admins.length; i++) {
//     const user = await findUser(group.admins[i]);

//     if (user.groups.includes(group.id)) continue;

//     // await editUser(group.admins[i], { groups: [...user.groups, group.id] });
//     await group.addMember(user);
//   }

//   return next();
// });

groupSchema.methods.addMember = async function (
  user: UserDocument
): Promise<boolean> {
  // const group = this as GroupDocument;

  // if (group.members.includes(user.id)) {
  //   return false;
  // }

  // group.members.push(user.id);
  // user.groups.push(group.id);
  // await group.save();
  // await user.save();
  // return true;

  const group = this as GroupDocument;

  if (!group.members.includes(user.id)) {
    group.members.push(user.id);
    await group.save();
  }

  if (!user.groups.includes(group.id)) {
    user.groups.push(group.id);
    await user.save();
  }

  return true;
};

groupSchema.methods.addList = async function (
  list: ListDocument
): Promise<boolean> {
  const group = this as GroupDocument;

  if (group.lists.includes(list.id)) {
    return false;
  }

  group.lists.push(list.id);
  list.group = group.id;
  await group.save();
  await list.save();
  return true;
};

const GroupModel = mongoose.model<GroupDocument>("Group", groupSchema);

export default GroupModel;
