import mongoose, { Schema, Types } from "mongoose";
import { ListDocument } from "./list.model";
import { UserDocument } from "./user.model";

export interface GroupDocument extends mongoose.Document {
	name: string;
	lists: Array<ListDocument["_id"]>;
	members: Array<UserDocument["_id"]>;
	admins: Array<UserDocument["_id"]>;
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

groupSchema.methods.addMember = async function (userId: Types.ObjectId) {
	const group = this as GroupDocument

	group.members.push(userId)
}

const GroupModel = mongoose.model<GroupDocument>("Group", groupSchema);

export default GroupModel;
