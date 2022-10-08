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
exports.findAllItems = exports.deleteItem = exports.editItem = exports.findItem = exports.createItem = void 0;
const item_model_1 = __importDefault(require("../models/item.model"));
function createItem(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newItem = yield item_model_1.default.create(input);
            return newItem.toJSON();
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.createItem = createItem;
function findItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const item = yield item_model_1.default.findById(id).exec();
            if (item === null) {
                throw new Error("Could not find item");
            }
            return item;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.findItem = findItem;
function editItem(id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const item = yield item_model_1.default.findByIdAndUpdate(id, body, { new: true });
            if (item === null) {
                throw new Error("Could not find item to update");
            }
            return item;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.editItem = editItem;
function deleteItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedItem = yield item_model_1.default.findByIdAndDelete(id);
            if (deletedItem === null) {
                throw new Error("Could not find item to delete");
            }
            return true;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.deleteItem = deleteItem;
function findAllItems() {
    return __awaiter(this, void 0, void 0, function* () {
        return item_model_1.default.find();
    });
}
exports.findAllItems = findAllItems;
//# sourceMappingURL=item.service.js.map