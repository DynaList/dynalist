import { Router } from "express";
import { createGroupHandler, findAllGroupsHandler, findGroupHandler } from "../controller/group.controller";

const groupRouter = Router()

// index
groupRouter.get('/', (req, res) => {
	res.json({ message: 'Group endpoint'})
})

// get all
groupRouter.get('/all', findAllGroupsHandler)

// new
groupRouter.post('/new', createGroupHandler)

// get one
groupRouter.get('/:id', findGroupHandler)

export default groupRouter