import { Router } from "express";
import { createListHandler, deleteListHandler, editListHandler, findAllListsHandler, findListHandler, seedListsHandler } from "../controller/list.controller";

const listRouter = Router()

// index
listRouter.get('/', (req, res) => {
	res.json({ message: 'List endpoint'})
})

// get all
listRouter.get('/all', findAllListsHandler)

// seed
listRouter.get('/seed/:count', seedListsHandler)

// new
listRouter.post('/new', createListHandler)

// get one
listRouter.get('/:id', findListHandler)

// edit one
listRouter.put('/:id', editListHandler)

// delete one
listRouter.delete('/:id', deleteListHandler)

export default listRouter