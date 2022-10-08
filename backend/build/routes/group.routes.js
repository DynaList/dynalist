"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const group_controller_1 = require("../controller/group.controller");
const groupRouter = (0, express_1.Router)();
// index
groupRouter.get('/', (req, res) => {
    res.json({ message: 'Group endpoint' });
});
// get all
groupRouter.get('/all', group_controller_1.findAllGroupsHandler);
// seed
groupRouter.get('/seed/:count', group_controller_1.seedGroupsHandler);
// new
groupRouter.post('/new', group_controller_1.createGroupHandler);
// get one
groupRouter.get('/:id', group_controller_1.findGroupHandler);
// edit one
groupRouter.put('/:id', group_controller_1.editGroupHandler);
// delete one
groupRouter.delete('/:id', group_controller_1.deleteGroupHandler);
// add member to group
groupRouter.put('/:groupId/users/:userId', group_controller_1.addMemberHandler);
// add list to group
groupRouter.put('/:groupId/lists/:listId', group_controller_1.addListHandler);
exports.default = groupRouter;
//# sourceMappingURL=group.routes.js.map