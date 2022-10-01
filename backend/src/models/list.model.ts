import mongoose, { Schema, Types } from "mongoose";

export interface ListDocument extends mongoose.Document {
	name: string;
	group: Types.ObjectId;
	items: Types.DocumentArray<Types.ObjectId>;
}

const listSchema = new mongoose.Schema<ListDocument>({
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