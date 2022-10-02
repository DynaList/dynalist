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