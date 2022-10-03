import { ObjectId } from "mongoose";
import ListModel, { ListDocument } from "../models/list.model";
import log from "../utils/logger";

export async function createList(input: ListDocument) {
	try {
		const newGroup = await ListModel.create(input)
		return newGroup.toJSON()
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function findList(id: String): Promise<ListDocument> {
	try {
		const list = await ListModel.findById(id).exec()
		if (list === null) {
			throw new Error("Could not find list")
		}
		return list
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function editList(id: String, body: Object): Promise<ListDocument> {
	try {
		const list = await ListModel.findByIdAndUpdate(id, body, { new: true})
		if (list === null) {
			throw new Error("Could not find list to update")
		}
		return list
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function deleteList(id: String): Promise<boolean> {
	try {
		const deletedList = await ListModel.findByIdAndDelete(id)
		if (deletedList === null) {
			throw new Error("Could not find list to delete")
		}
		return true
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function findAllLists() {
	return ListModel.find()
	.populate({
		path: 'group',
		select: 'name'
	})
	.populate({
		path: 'items',
		select: 'name'
	})
}