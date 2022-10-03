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

export async function editGroup(id: String): Promise<GroupDocument> {
	try {
		const group = await findGroup()
	}
}

export async function deleteGroup(id: String): Promise<GroupDocument> {
	
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