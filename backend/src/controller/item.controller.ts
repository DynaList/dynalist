import { Request, Response } from "express"
import { createItem, deleteItem, editItem, findAllItems, findItem } from "../service/item.service";
import log from "../utils/logger";
import { itemSeedData } from "../utils/seedData";

export async function createItemHandler(req: Request, res: Response) {
	try {
		const newItem = await createItem(req.body)
		return res.send(newItem)
	}
	catch (error: any) {
		log.error(error)
		return res.status(409).send(error.message)
	}
}

export async function findItemHandler(req: Request, res: Response) {
	try {
		const item = await findItem(req.params.id)
		if (item === null) {
			return res.status(404).send({ message: "Error: Could not find item"})
		}
		return res.status(200).send(item)
	} catch (error: any) {
		log.error(error)
		return res.status(404).send(error.message)
	}
}

export async function editItemHandler(req: Request, res: Response) {
	try {
		const updatedItem = await editItem(req.params.id, req.body)
		return res.status(200).send(updatedItem)
	} catch (error: any) {
		log.error(error)
		return res.status(400).send(error.message)
	}
}

export async function deleteItemHandler(req: Request, res: Response) {
	try {
		const success = await deleteItem(req.params.id)
		if (success) {
			return res.status(200).send({ message: "Successfully deleted item", success: true })
		} else {
			return res.status(400).send({ message: "Error deleting item", success: false})
		}
	} catch (error: any) {
		log.error(error)
		return res.status(400).send(error.message)
	}
}


export async function findAllItemsHandler(req: Request, res: Response) {
	const items = await findAllItems()

	return res.send(items)
}

// seed
export async function seedItemsHandler(req: Request, res: Response) {
	// Should authenticate this, check if the user is an admin and if not just show a 404 page
	let count = req.params.count

	const data = itemSeedData(Number(count))
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