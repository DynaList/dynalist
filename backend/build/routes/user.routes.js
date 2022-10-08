"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const user_schema_1 = require("../schema/user.schema");
const user_controller_1 = require("../controller/user.controller");
const userRouter = (0, express_1.Router)();
// index
userRouter.get("/", (req, res) => {
    res.json({ message: "User endpoint working" });
});
// get all
userRouter.get("/all", user_controller_1.findAllUsersHandler);
// seed
userRouter.get('/seed/:count', user_controller_1.seedUsersHandler);
// new
userRouter.post("/new", (0, validateResource_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
// get by name
userRouter.get("/search/:name", user_controller_1.findUsersByNameHandler);
// get one
userRouter.get('/:id', user_controller_1.findUserHandler);
// edit one
userRouter.put('/:id', user_controller_1.editUserHandler);
// delete one
userRouter.delete('/:id', user_controller_1.deleteUserHandler);
// add group to user
userRouter.put('/:userId/groups/:groupId', user_controller_1.addGroupHandler);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map