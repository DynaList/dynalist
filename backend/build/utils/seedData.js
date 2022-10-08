"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSeedData = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
function userSeedData() {
    const data = [
        new user_model_1.default({
            name: 'TestUser1',
            email: 'seeded@gmail.com',
            password: 'password'
        }),
        new user_model_1.default({
            name: 'TestUser2',
            password: 'banana'
        })
    ];
    return data;
}
exports.userSeedData = userSeedData;
//# sourceMappingURL=seedData.js.map