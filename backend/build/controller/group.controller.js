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
exports.addListHandler = exports.addMemberHandler = exports.deleteGroupHandler = exports.editGroupHandler = exports.findGroupHandler = exports.createGroupHandler = exports.seedGroupsHandler = exports.findAllGroupsHandler = void 0;
const group_service_1 = require("../service/group.service");
const list_service_1 = require("../service/list.service");
const user_service_1 = require("../service/user.service");
const logger_1 = __importDefault(require("../utils/logger"));
const seedData_1 = require("../utils/seedData");
// get all
function findAllGroupsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const groups = yield (0, group_service_1.findAllGroups)();
        return res.send(groups);
    });
}
exports.findAllGroupsHandler = findAllGroupsHandler;
// seed
function seedGroupsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Should authenticate this, check if the user is an admin and if not just show a 404 page
        let count = req.params.count;
        const data = (0, seedData_1.groupSeedData)(Number(count));
        const results = [];
        // Save each item individually to make sure we get the middleware running
        for (let i = 0; i < data.length; i++) {
            results.push(yield data[i].save());
        }
        res.status(201).json({
            message: 'Seeded data',
            results: results
        });
    });
}
exports.seedGroupsHandler = seedGroupsHandler;
// new
function createGroupHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newGroup = yield (0, group_service_1.createGroup)(req.body);
            return res.send(newGroup);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(409).send(error.message);
        }
    });
}
exports.createGroupHandler = createGroupHandler;
// get one
function findGroupHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const group = yield (0, group_service_1.findGroup)(req.params.id);
            if (group === null) {
                return res.status(404).send({ message: "Error: Could not find group" });
            }
            return res.status(200).send(group);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(404).send(error.message);
        }
    });
}
exports.findGroupHandler = findGroupHandler;
// edit one
function editGroupHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedGroup = yield (0, group_service_1.editGroup)(req.params.id, req.body);
            return res.status(200).send(updatedGroup);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.editGroupHandler = editGroupHandler;
// delete one
function deleteGroupHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const success = yield (0, group_service_1.deleteGroup)(req.params.id);
            if (success) {
                return res.status(200).send({ message: "Successfully deleted group", success: true });
            }
            else {
                return res.status(400).send({ message: "Error deleting group", success: false });
            }
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.deleteGroupHandler = deleteGroupHandler;
// add member to group
function addMemberHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // get group
            const group = yield (0, group_service_1.findGroup)(req.params.groupId);
            if (group === null) {
                return res.status(404).send({ message: "Error: Could not find group" });
            }
            // get user
            const user = yield (0, user_service_1.findUser)(req.params.userId);
            if (user === null) {
                return res.status(404).send({ message: "Error: Could not find user" });
            }
            group.addMember(user);
            return res.send(group);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.addMemberHandler = addMemberHandler;
// add list to group
function addListHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // get group
            const group = yield (0, group_service_1.findGroup)(req.params.groupId);
            if (group === null) {
                return res.status(404).send({ message: "Error: Could not find group" });
            }
            // get list
            const list = yield (0, list_service_1.findList)(req.params.listId);
            if (list === null) {
                return res.status(404).send({ message: "Error: Could not find list" });
            }
            group.addList(list);
            return res.send(group);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.addListHandler = addListHandler;
//# sourceMappingURL=group.controller.js.map