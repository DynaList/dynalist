import mongoose, { mongo } from "mongoose";

const itemSchema = new mongoose.Schema({
	name: String
})

const ItemModel = mongoose.model("Item", itemSchema)

export default ItemModel