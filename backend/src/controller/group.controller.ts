import { Request, Response } from "express"
import { createGroup, findAllGroups } from "../service/group.service";
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

export async function findAllGroupsHandler(req: Request, res: Response) {
	const groups = await findAllGroups()

	return res.send(groups)
}