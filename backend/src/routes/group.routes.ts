import { Router } from "express";
import { createGroupHandler } from "../controller/group.controller";

const groupRouter = Router()

groupRouter.get('/', (req, res) => {
	res.json({ message: 'Group endpoint'})
})

groupRouter.post('/new', createGroupHandler)

export default groupRouter