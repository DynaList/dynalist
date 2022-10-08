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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.findAllUsers = exports.deleteUser = exports.editUser = exports.findUsersByName = exports.findUser = exports.createUser = void 0;
const lodash_1 = require("lodash");
const user_model_1 = __importDefault(require("../models/user.model"));
// new user
function createUser(
// this is a mess, I'll refactor it later
input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield user_model_1.default.create(input);
            return (0, lodash_1.omit)(newUser.toJSON(), "password");
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.createUser = createUser;
// find one
function findUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.findById(id)
                .populate({
                path: 'groups'
            });
            if (user === null) {
                throw new Error("Could not find user");
            }
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.findUser = findUser;
// find by name
function findUsersByName(nameInput) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // sanitize input
            const users = yield user_model_1.default.find({
                $or: [
                    { firstName: { $regex: nameInput, $options: "ix" } },
                    { lastName: { $regex: nameInput, $options: "ix" } },
                ],
            });
            return users;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.findUsersByName = findUsersByName;
// edit one
function editUser(id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.findByIdAndUpdate(id, body, { new: true });
            if (user === null) {
                throw new Error("Could not find user to update");
            }
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.editUser = editUser;
// delete one
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedUser = yield user_model_1.default.findByIdAndDelete(id);
            if (deletedUser === null) {
                throw new Error("Could not find user to delete");
            }
            return true;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.deleteUser = deleteUser;
// get all
function findAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return user_model_1.default.find().lean();
    });
}
exports.findAllUsers = findAllUsers;
// validate password
function validatePassword({ email, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_model_1.default.findOne({ email });
        if (!user)
            return false;
        const isValid = yield user.comparePassword(password);
        if (!isValid)
            return false;
        return (0, lodash_1.omit)(user.toJSON(), "password");
    });
}
exports.validatePassword = validatePassword;
//# sourceMappingURL=user.service.js.map