import { Request, Response } from "express"
import { createGroup, deleteGroup, editGroup, findAllGroups, findGroup } from "../service/group.service";
import log from "../utils/logger";

export async function createGroupHandler(req: Request, res: Response) {
	try {
		const newGroup = await createGroup(req.body)
		return res.send(newGroup)
	}
	catch (error: any) {
		log.error(error)
		return res.status(409).send(error.message)
	}
}

export async function findGroupHandler(req: Request, res: Response) {
	try {
		const group = await findGroup(req.params.id)
		if (group === null) {
			return res.status(404).send({ message: "Error: Could not find group"})
		}
		return res.status(200).send(group)
	} catch (error: any) {
		log.error(error)
		return res.status(404).send(error.message)
	}
}

export async function editGroupHandler(req: Request, res: Response) {
	try {
		const updatedGroup = await editGroup(req.params.id, req.body)
		return res.status(200).send(updatedGroup)
	} catch (error: any) {
		log.error(error)
		return res.status(400).send(error.message)
	}
}

export async function deleteGroupHandler(req: Request, res: Response) {
	try {
		const success = await deleteGroup(req.params.id)
		if (success) {
			return res.status(200).send({ message: "Successfully deleted group", success: true })
		} else {
			return res.status(400).send({ message: "Error deleting group", success: false})
		}
	} catch (error: any) {
		log.error(error)
		return res.status(400).send(error.message)
	}
}


export async function findAllGroupsHandler(req: Request, res: Response) {
	const groups = await findAllGroups()

	return res.send(groups)
}