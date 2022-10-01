"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const seedData_1 = require("../utils/seedData");
const userRouter = (0, express_1.Router)();
userRouter.get("/", (req, res) => {
    res.json({ message: "User endpoint working" });
});
userRouter.post("/new" /*, middleware, */, user_controller_1.createUserHandler);
userRouter.get('/seeddata', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Should authenticate this, check if the user is an admin and if not just show a 404 page
    const data = (0, seedData_1.userSeedData)();
    const results = [];
    // Save each item individually to make sure we get the middleware running
    // Otherwise the passwords will be stored as plaintext
    for (let i = 0; i < data.length; i++) {
        results.push(yield data[i].save());
    }
    res.json({
        message: 'Seeded data',
        results: results
    });
}));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map