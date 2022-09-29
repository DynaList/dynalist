import mongoose, { Schema } from "mongoose";

const listSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	group: {
		type: Schema.Types.ObjectId,
		ref: 'Group'
	},
	items: [{ 
		type: Schema.Types.ObjectId,
		ref: 'Item'
	}]
})

const ListModel = mongoose.model('List', listSchema)

export default ListModel