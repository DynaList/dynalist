"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const list_controller_1 = require("../controller/list.controller");
const listRouter = (0, express_1.Router)();
// index
listRouter.get('/', (req, res) => {
    res.json({ message: 'List endpoint' });
});
// get all
listRouter.get('/all', list_controller_1.findAllListsHandler);
// seed
listRouter.get('/seed/:count', list_controller_1.seedListsHandler);
// new
listRouter.post('/new', list_controller_1.createListHandler);
// get one
listRouter.get('/:id', list_controller_1.findListHandler);
// edit one
listRouter.put('/:id', list_controller_1.editListHandler);
// delete one
listRouter.delete('/:id', list_controller_1.deleteListHandler);
exports.default = listRouter;
//# sourceMappingURL=list.routes.js.map