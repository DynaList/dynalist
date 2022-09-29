import mongoose, { mongo } from "mongoose";

const itemSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	price: {
		type: Number
	},
	link: {
		type: String
	},
	inStock: {
		type: Boolean
	},
	image: {
		type: String
	}
})

const ItemModel = mongoose.model("Item", itemSchema)

export default ItemModel