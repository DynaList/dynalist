import { Router } from "express";


const groupRouter = Router()

groupRouter.get('/', (req, res) => {
	res.json({ message: 'Group endpoint'})
})

export default groupRouter