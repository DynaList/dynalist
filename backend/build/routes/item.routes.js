"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_controller_1 = require("../controller/item.controller");
const itemRouter = (0, express_1.Router)();
// index
itemRouter.get('/', (req, res) => {
    res.json({ message: 'Item endpoint' });
});
// get all
itemRouter.get('/all', item_controller_1.findAllItemsHandler);
// seed
itemRouter.get('/seed/:count', item_controller_1.seedItemsHandler);
// new
itemRouter.post('/new', item_controller_1.createItemHandler);
// get one
itemRouter.get('/:id', item_controller_1.findItemHandler);
// edit one
itemRouter.put('/:id', item_controller_1.editItemHandler);
// delete one
itemRouter.delete('/:id', item_controller_1.deleteItemHandler);
exports.default = itemRouter;
//# sourceMappingURL=item.routes.js.map