import mongoose, { mongo } from "mongoose";

export interface ItemDocument extends mongoose.Document {
	name: string;
	price: number;
	link: string;
	inStock: boolean;
	image: string;
}

const itemSchema = new mongoose.Schema<ItemDocument>({
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