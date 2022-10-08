import { ObjectId } from "mongoose";
import ItemModel, { ItemDocument } from "../models/item.model";

export async function createItem(input: ItemDocument) {
	try {
		const newItem = await ItemModel.create(input)
		return newItem.toJSON()
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function findItem(id: String): Promise<ItemDocument> {
	try {
		const item = await ItemModel.findById(id).exec()
		if (item === null) {
			throw new Error("Could not find item")
		}
		return item
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function editItem(id: String, body: Object): Promise<ItemDocument> {
	try {
		const item = await ItemModel.findByIdAndUpdate(id, body, { new: true})
		if (item === null) {
			throw new Error("Could not find item to update")
		}
		return item
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function deleteItem(id: String): Promise<boolean> {
	try {
		const deletedItem = await ItemModel.findByIdAndDelete(id)
		if (deletedItem === null) {
			throw new Error("Could not find item to delete")
		}
		return true
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function findAllItems() {
	return ItemModel.find()
}