import { Request, Response } from "express"
import { createGroup, deleteGroup, editGroup, findAllGroups, findGroup } from "../service/group.service";
import { findUser } from "../service/user.service";
import log from "../utils/logger";
import { groupSeedData } from "../utils/seedData";

// get all
export async function findAllGroupsHandler(req: Request, res: Response) {
	const groups = await findAllGroups()

	return res.send(groups)
}

// seed
export async function seedGroupsHandler(req: Request, res: Response) {
	// Should authenticate this, check if the user is an admin and if not just show a 404 page
	let count = req.params.count

	const data = groupSeedData(Number(count))
	const results = []
	
	// Save each item individually to make sure we get the middleware running
	for (let i = 0; i < data.length; i++) {
		results.push(await data[i].save())
	}
	
	res.status(201).json({
		message: 'Seeded data',
		results: results
	})
}

// new
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

// get one
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

export async function addMemberHandler(req: Request, res: Response) {
	try {
		// get group
		const group = await findGroup(req.params.groupId)
		if (group === null) {
			return res.status(404).send({ message: "Error: Could not find group"})
		}

		// get user
		const user = await findUser(req.params.userId)
		if (user === null) {
			return res.status(404).send({ message: "Error: Could not find user"})
		}

		group.addMember(user)
	} catch (error: any) {
		log.error(error)
		return res.status(400).send(error.message)
	}
}

// edit one
export async function editGroupHandler(req: Request, res: Response) {
	try {
		const updatedGroup = await editGroup(req.params.id, req.body)
		return res.status(200).send(updatedGroup)
	} catch (error: any) {
		log.error(error)
		return res.status(400).send(error.message)
	}
}

// delete one
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