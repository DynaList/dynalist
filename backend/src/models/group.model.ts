import mongoose, { Schema, Types } from "mongoose";

export interface GroupDocument extends mongoose.Document {
	name: string;
	lists: Types.DocumentArray<Types.ObjectId>;
	members: Types.DocumentArray<Types.ObjectId>;
	admins: Types.DocumentArray<Types.ObjectId>;
}

const groupSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	lists: [{
		type: Schema.Types.ObjectId,
		ref: 'List'
	}],
	members: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	admins: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}]
})

const GroupModel = mongoose.model('Group', groupSchema)

export default GroupModel