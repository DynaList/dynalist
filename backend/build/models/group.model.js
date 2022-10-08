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
const mongoose_1 = __importDefault(require("mongoose"));
const groupSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    lists: [
        {
            type: String,
            ref: "List",
        },
    ],
    members: [
        {
            type: String,
            ref: "User",
        },
    ],
    admins: [
        {
            type: String,
            ref: "User",
        },
    ],
});
// groupSchema.pre("save", async function (next) {
//   const group = this as GroupDocument;
//   for (let i = 0; i < group.members.length; i++) {
//     const user = await findUser(group.members[i]);
//     console.log(
//       "The user groups: ",
//       user.groups,
//       " and the group id: ",
//       group.id
//     );
//     if (user.groups.includes(group.id)) continue;
//     // await editUser(group.members[i], { groups: [...user.groups, group.id] });
//     await group.addMember(user);
//   }
//   for (let i = 0; i < group.admins.length; i++) {
//     const user = await findUser(group.admins[i]);
//     if (user.groups.includes(group.id)) continue;
//     // await editUser(group.admins[i], { groups: [...user.groups, group.id] });
//     await group.addMember(user);
//   }
//   return next();
// });
groupSchema.methods.addMember = function (user) {
    return __awaiter(this, void 0, void 0, function* () {
        // const group = this as GroupDocument;
        // if (group.members.includes(user.id)) {
        //   return false;
        // }
        // group.members.push(user.id);
        // user.groups.push(group.id);
        // await group.save();
        // await user.save();
        // return true;
        const group = this;
        if (!group.members.includes(user.id)) {
            group.members.push(user.id);
            yield group.save();
        }
        if (!user.groups.includes(group.id)) {
            user.groups.push(group.id);
            yield user.save();
        }
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