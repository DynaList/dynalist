import mongoose, { Schema, Types } from "mongoose";
import { ListDocument } from "./list.model";
import { UserDocument } from "./user.model";

export interface GroupDocument extends mongoose.Document {
	name: string;
	lists: Array<ListDocument["_id"]>;
	members: Array<UserDocument["_id"]>;
	admins: Array<UserDocument["_id"]>;
  addMember(user: UserDocument): boolean;
  addList(list: ListDocument): boolean
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

groupSchema.methods.addMember = function (user: UserDocument): boolean {
	const group = this as GroupDocument

  if (group.members.includes(user.id)) {
    return false
  }

	group.members.push(user.id)
  user.groups?.push(group.id)
  group.save()
  user.save()
  return true
}

groupSchema.methods.addList = function (list: ListDocument): boolean {
  const group = this as GroupDocument

  if (group.lists.includes(list.id)) {
    return false
  }

  group.lists.push(list.id)
  list.group = group.id
  group.save()
  list.save()
  return true
}

const GroupModel = mongoose.model<GroupDocument>("Group", groupSchema);

export default GroupModel;
