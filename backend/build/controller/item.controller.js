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
exports.seedItemsHandler = exports.findAllItemsHandler = exports.deleteItemHandler = exports.editItemHandler = exports.findItemHandler = exports.createItemHandler = void 0;
const item_service_1 = require("../service/item.service");
const logger_1 = __importDefault(require("../utils/logger"));
const seedData_1 = require("../utils/seedData");
function createItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newItem = yield (0, item_service_1.createItem)(req.body);
            return res.send(newItem);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(409).send(error.message);
        }
    });
}
exports.createItemHandler = createItemHandler;
function findItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const item = yield (0, item_service_1.findItem)(req.params.id);
            if (item === null) {
                return res.status(404).send({ message: "Error: Could not find item" });
            }
            return res.status(200).send(item);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(404).send(error.message);
        }
    });
}
exports.findItemHandler = findItemHandler;
function editItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedItem = yield (0, item_service_1.editItem)(req.params.id, req.body);
            return res.status(200).send(updatedItem);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.editItemHandler = editItemHandler;
function deleteItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const success = yield (0, item_service_1.deleteItem)(req.params.id);
            if (success) {
                return res.status(200).send({ message: "Successfully deleted item", success: true });
            }
            else {
                return res.status(400).send({ message: "Error deleting item", success: false });
            }
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(400).send(error.message);
        }
    });
}
exports.deleteItemHandler = deleteItemHandler;
function findAllItemsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const items = yield (0, item_service_1.findAllItems)();
        return res.send(items);
    });
}
exports.findAllItemsHandler = findAllItemsHandler;
// seed
function seedItemsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Should authenticate this, check if the user is an admin and if not just show a 404 page
        let count = req.params.count;
        const data = (0, seedData_1.itemSeedData)(Number(count));
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
exports.seedItemsHandler = seedItemsHandler;
//# sourceMappingURL=item.controller.js.map