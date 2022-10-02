import { Router } from "express";
import { createGroupHandler, findAllGroupsHandler } from "../controller/group.controller";

const groupRouter = Router()

groupRouter.get('/', (req, res) => {
	res.json({ message: 'Group endpoint'})
})

groupRouter.post('/new', createGroupHandler)

groupRouter.get('/all', findAllGroupsHandler)

export default groupRouter