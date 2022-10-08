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
exports.addGroupHandler = exports.seedUsersHandler = exports.findAllUsersHandler = exports.deleteUserHandler = exports.editUserHandler = exports.findUsersByNameHandler = exports.findUserHandler = exports.createUserHandler = void 0;
const group_service_1 = require("../service/group.service");
const user_service_1 = require("../service/user.service");
const logger_1 = __importDefault(require("../utils/logger"));
const seedData_1 = require("../utils/seedData");
// create one
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield (0, user_service_1.createUser)(req.body);
            return res.send(newUser);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(409).send(error.message);
        }
    });
}
exports.createUserHandler = createUserHandler;
// find one
function findUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield (0, user_service_1.findUser)(req.params.id);
            if (user === null) {
                return res.status(404).send({ message: "Error: Could not find user" });
            }
            return res.status(200).send(user);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(404).send(error.message);
        }
    });
}
exports.findUserHandler = findUserHandler;
// find one by name
function findUsersByNameHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, user_service_1.findUsersByName)(req.params.name);
            return res.status(200).send({
                count: users.length,
                results: users,
            });
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.findUsersByNameHandler = findUsersByNameHandler;
// edit one
function editUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedUser = yield (0, user_service_1.editUser)(req.params.id, req.body);
            return res.status(200).send(updatedUser);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.editUserHandler = editUserHandler;
// delete one
function deleteUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const success = yield (0, user_service_1.deleteUser)(req.params.id);
            if (success) {
                return res
                    .status(200)
                    .send({ message: "Successfully deleted user", success: true });
            }
            else {
                return res
                    .status(400)
                    .send({ message: "Error deleting user", success: false });
            }
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.deleteUserHandler = deleteUserHandler;
// find all
function findAllUsersHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield (0, user_service_1.findAllUsers)();
        return res.send(user);
    });
}
exports.findAllUsersHandler = findAllUsersHandler;
// seed
function seedUsersHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Should authenticate this, check if the user is an admin and if not just show a 404 page
        let count = req.params.count;
        const data = (0, seedData_1.userSeedData)(Number(count));
        const results = [];
        // Save each item individually to make sure we get the middleware running
        // Otherwise the passwords will be stored as plaintext
        for (let i = 0; i < data.length; i++) {
            results.push(yield data[i].save());
        }
        res.status(201).json({
            message: "Seeded data",
            results: results,
        });
    });
}
exports.seedUsersHandler = seedUsersHandler;
// add group to user
function addGroupHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // get user
            const user = yield (0, user_service_1.findUser)(req.params.userId);
            if (user === null) {
                return res.status(404).send({ message: "Error: Could not find user" });
            }
            // get group
            const group = yield (0, group_service_1.findGroup)(req.params.groupId);
            if (group === null) {
                return res.status(404).send({ message: "Error: Could not find group" });
            }
            user.addGroup(group);
            return res.send(user);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.addGroupHandler = addGroupHandler;
//# sourceMappingURL=user.controller.js.map