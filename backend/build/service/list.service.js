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
exports.findAllLists = exports.deleteList = exports.editList = exports.findList = exports.createList = void 0;
const list_model_1 = __importDefault(require("../models/list.model"));
// new list
function createList(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newList = yield list_model_1.default.create(input);
            return newList.toJSON();
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.createList = createList;
// find one
function findList(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const list = yield list_model_1.default.findById(id).exec();
            if (list === null) {
                throw new Error("Could not find list");
            }
            return list;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.findList = findList;
// edit one
function editList(id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const list = yield list_model_1.default.findByIdAndUpdate(id, body, { new: true });
            if (list === null) {
                throw new Error("Could not find list to update");
            }
            return list;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.editList = editList;
// delete one
function deleteList(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedList = yield list_model_1.default.findByIdAndDelete(id);
            if (deletedList === null) {
                throw new Error("Could not find list to delete");
            }
            return true;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.deleteList = deleteList;
// get all
function findAllLists() {
    return __awaiter(this, void 0, void 0, function* () {
        return list_model_1.default.find()
            .populate({
            path: 'group',
            select: 'name'
        })
            .populate({
            path: 'items',
            select: 'name'
        });
    });
}
exports.findAllLists = findAllLists;
//# sourceMappingURL=list.service.js.map