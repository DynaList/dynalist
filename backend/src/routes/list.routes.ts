import { Router } from "express";
import { createListHandler, deleteListHandler, editListHandler, findAllListsHandler, findListHandler } from "../controller/list.controller";

const groupRouter = Router()

// index
groupRouter.get('/', (req, res) => {
	res.json({ message: 'List endpoint'})
})

// get all
groupRouter.get('/all', findAllListsHandler)

// new
groupRouter.post('/new', createListHandler)

// get one
groupRouter.get('/:id', findListHandler)

// edit one
groupRouter.put('/:id', editListHandler)

// delete one
groupRouter.delete('/:id', deleteListHandler)

export default groupRouter