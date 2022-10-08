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
exports.findAllGroups = exports.deleteGroup = exports.editGroup = exports.findGroup = exports.createGroup = void 0;
const group_model_1 = __importDefault(require("../models/group.model"));
function createGroup(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newGroup = yield group_model_1.default.create(input);
            return newGroup.toJSON();
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.createGroup = createGroup;
function findGroup(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const group = yield group_model_1.default.findById(id).exec();
            if (group === null) {
                throw new Error("Could not find group");
            }
            return group;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.findGroup = findGroup;
function editGroup(id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const group = yield group_model_1.default.findByIdAndUpdate(id, body, { new: true });
            if (group === null) {
                throw new Error("Could not find group to update");
            }
            return group;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.editGroup = editGroup;
function deleteGroup(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedGroup = yield group_model_1.default.findByIdAndDelete(id);
            if (deletedGroup === null) {
                throw new Error("Could not find group to delete");
            }
            return true;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.deleteGroup = deleteGroup;
function findAllGroups() {
    return __awaiter(this, void 0, void 0, function* () {
        return group_model_1.default.find()
            .populate({
            path: 'lists',
            select: 'name'
        })
            .populate({
            path: 'members',
            select: 'name'
        })
            .populate({
            path: 'admins',
            select: 'name'
        });
    });
}
exports.findAllGroups = findAllGroups;
//# sourceMappingURL=group.service.js.map