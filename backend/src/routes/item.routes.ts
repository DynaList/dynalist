import { Router } from "express";
import { createItemHandler, deleteItemHandler, editItemHandler, findAllItemsHandler, findItemHandler, seedItemsHandler } from "../controller/item.controller";

const itemRouter = Router()

// index
itemRouter.get('/', (req, res) => {
	res.json({ message: 'Item endpoint'})
})

// get all
itemRouter.get('/all', findAllItemsHandler)

// seed
itemRouter.get('/seed/:count', seedItemsHandler)

// new
itemRouter.post('/new', createItemHandler)

// get one
itemRouter.get('/:id', findItemHandler)

// edit one
itemRouter.put('/:id', editItemHandler)

// delete one
itemRouter.delete('/:id', deleteItemHandler)

export default itemRouter