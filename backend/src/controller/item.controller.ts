import { Request, Response } from "express"
import { createItem, deleteItem, editItem, findAllItems, findItem } from "../service/item.service";
import log from "../utils/logger";

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