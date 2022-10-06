import mongoose, { Schema, Types } from "mongoose";
import { ListDocument } from "./list.model";
import { UserDocument } from "./user.model";

export interface GroupDocument extends mongoose.Document {
	name: string;
	lists: Array<ListDocument["_id"]>;
	members: Array<UserDocument["_id"]>;
	admins: Array<UserDocument["_id"]>;
  addMember(user: UserDocument): Promise<boolean>;
  addList(list: ListDocument): Promise<boolean>
}

const groupSchema = new mongoose.Schema<GroupDocument>({
  name: {
    type: String,
    require: true,
  },
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: "List",
    },
  ],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  admins: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

groupSchema.methods.addMember = async function (user: UserDocument): Promise<boolean> {
	const group = this as GroupDocument

  if (group.members.includes(user.id)) {
    return false
  }

	group.members.push(user.id)
  user.groups.push(group.id)
  await group.save()
  await user.save()
  return true
}

groupSchema.methods.addList = async function (list: ListDocument): Promise<boolean> {
  const group = this as GroupDocument

  if (group.lists.includes(list.id)) {
    return false
  }

  group.lists.push(list.id)
  list.group = group.id
  await group.save()
  await list.save()
  return true
}

const GroupModel = mongoose.model<GroupDocument>("Group", groupSchema);

export default GroupModel;
