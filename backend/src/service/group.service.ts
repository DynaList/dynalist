import { ObjectId } from "mongoose";
import GroupModel, { GroupDocument } from "../models/group.model";
import log from "../utils/logger";

export async function createGroup(input: GroupDocument) {
	try {
		const newGroup = await GroupModel.create(input)
		return newGroup.toJSON()
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function findGroup(id: String): Promise<GroupDocument> {
	try {
		const group = await GroupModel.findById(id).exec()
		return group!
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function editGroup(id: String, body: Object): Promise<GroupDocument> {
	try {
		const group = await GroupModel.findByIdAndUpdate(id, body, { new: true})
		if (group === null) {
			throw new Error("Could not find group to update")
		}
		return group
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function deleteGroup(id: String): Promise<boolean> {
	try {
		const deletedGroup = await GroupModel.findByIdAndDelete(id)
		if (deletedGroup === null) {
			throw new Error("Could not find group to delete")
		}
		console.log(deletedGroup)
		return true
	} catch (error: any) {
		throw new Error(error)
	}
}

export async function findAllGroups() {
	return GroupModel.find()
	.populate({
		path: 'lists',
		select: 'name'
	})
	.populate({
		path: 'members',
		select: 'name'
	})
	.populate({
		path: 'admins',
		select: 'name'
	})
}