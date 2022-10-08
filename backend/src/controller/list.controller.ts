import { Request, Response } from "express"
import { createList, deleteList, editList, findAllLists, findList } from "../service/list.service";
import log from "../utils/logger";
import { listSeedData } from "../utils/seedData";

// create one
export async function createListHandler(req: Request, res: Response) {
	try {
		const newList = await createList(req.body)
		return res.send(newList)
	}
	catch (error: any) {
		log.error(error)
		return res.status(409).send(error.message)
	}
}

// find one
export async function findListHandler(req: Request, res: Response) {
	try {
		const list = await findList(req.params.id)
		if (list === null) {
			return res.status(404).send({ message: "Error: Could not find list"})
		}
		return res.status(200).send(list)
	} catch (error: any) {
		log.error(error)
		return res.status(404).send(error.message)
	}
}

// edit one
export async function editListHandler(req: Request, res: Response) {
	try {
		const updatedList = await editList(req.params.id, req.body)
		return res.status(200).send(updatedList)
	} catch (error: any) {
		log.error(error)
		return res.status(400).send(error.message)
	}
}

// delete one
export async function deleteListHandler(req: Request, res: Response) {
	try {
		const success = await deleteList(req.params.id)
		if (success) {
			return res.status(200).send({ message: "Successfully deleted list", success: true })
		} else {
			return res.status(400).send({ message: "Error deleting list", success: false})
		}
	} catch (error: any) {
		log.error(error)
		return res.status(400).send(error.message)
	}
}

// find all
export async function findAllListsHandler(req: Request, res: Response) {
	const lists = await findAllLists()

	return res.send(lists)
}

// seed
export async function seedListsHandler(req: Request, res: Response) {
	// Should authenticate this, check if the user is an admin and if not just show a 404 page
	let count = req.params.count

	const data = listSeedData(Number(count))
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