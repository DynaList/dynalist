import GroupModel, { GroupDocument } from "../models/group.model";

export async function createGroup(input: GroupDocument) {
	try {
		const newGroup = await GroupModel.create(input)
		return newGroup.toJSON()
	}
	catch (error: any) {
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