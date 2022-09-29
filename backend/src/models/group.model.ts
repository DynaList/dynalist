import mongoose, { Schema } from "mongoose";

const groupSchema = new mongoose.Schema({
	name: String,
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