import { Router } from "express";
import { createGroupHandler, deleteGroupHandler, editGroupHandler, findAllGroupsHandler, findGroupHandler, seedGroupsHandler } from "../controller/group.controller";

const groupRouter = Router()

// index
groupRouter.get('/', (req, res) => {
	res.json({ message: 'Group endpoint'})
})

// get all
groupRouter.get('/all', findAllGroupsHandler)

// seed
groupRouter.get('/seed/:count', seedGroupsHandler)

// new
groupRouter.post('/new', createGroupHandler)

// get one
groupRouter.get('/:id', findGroupHandler)

// edit one
groupRouter.put('/:id', editGroupHandler)

// delete one
groupRouter.delete('/:id', deleteGroupHandler)

export default groupRouter