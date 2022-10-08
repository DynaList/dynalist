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
exports.seedListsHandler = exports.findAllListsHandler = exports.deleteListHandler = exports.editListHandler = exports.findListHandler = exports.createListHandler = void 0;
const list_service_1 = require("../service/list.service");
const logger_1 = __importDefault(require("../utils/logger"));
const seedData_1 = require("../utils/seedData");
// create one
function createListHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newList = yield (0, list_service_1.createList)(req.body);
            return res.send(newList);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(409).send(error.message);
        }
    });
}
exports.createListHandler = createListHandler;
// find one
function findListHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const list = yield (0, list_service_1.findList)(req.params.id);
            if (list === null) {
                return res.status(404).send({ message: "Error: Could not find list" });
            }
            return res.status(200).send(list);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(404).send(error.message);
        }
    });
}
exports.findListHandler = findListHandler;
// edit one
function editListHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedList = yield (0, list_service_1.editList)(req.params.id, req.body);
            return res.status(200).send(updatedList);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.editListHandler = editListHandler;
// delete one
function deleteListHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const success = yield (0, list_service_1.deleteList)(req.params.id);
            if (success) {
                return res.status(200).send({ message: "Successfully deleted list", success: true });
            }
            else {
                return res.status(400).send({ message: "Error deleting list", success: false });
            }
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.deleteListHandler = deleteListHandler;
// find all
function findAllListsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const lists = yield (0, list_service_1.findAllLists)();
        return res.send(lists);
    });
}
exports.findAllListsHandler = findAllListsHandler;
// seed
function seedListsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Should authenticate this, check if the user is an admin and if not just show a 404 page
        let count = req.params.count;
        const data = (0, seedData_1.listSeedData)(Number(count));
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
exports.seedListsHandler = seedListsHandler;
//# sourceMappingURL=list.controller.js.map