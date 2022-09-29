"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const userRouter = (0, express_1.Router)();
userRouter.get("/", (req, res) => {
    res.json({ message: "User endpoint working" });
});
userRouter.post("/new" /*, middleware, */, user_controller_1.createUserHandler);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map