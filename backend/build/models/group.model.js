"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoose_1 = __importStar(require("mongoose"));
const groupSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    lists: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "List",
        },
    ],
    members: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    admins: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});
groupSchema.methods.addMember = function (user) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = this;
        if (group.members.includes(user.id)) {
            return false;
        }
        group.members.push(user.id);
        user.groups.push(group.id);
        yield group.save();
        yield user.save();
        return true;
    });
};
groupSchema.methods.addList = function (list) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = this;
        if (group.lists.includes(list.id)) {
            return false;
        }
        group.lists.push(list.id);
        list.group = group.id;
        yield group.save();
        yield list.save();
        return true;
    });
};
const GroupModel = mongoose_1.default.model("Group", groupSchema);
exports.default = GroupModel;
//# sourceMappingURL=group.model.js.map