"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const itemSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
    },
    link: {
        type: String,
    },
    inStock: {
        type: Boolean,
    },
    image: {
        type: String,
    },
});
const ItemModel = mongoose_1.default.model("Item", itemSchema);
exports.default = ItemModel;
//# sourceMappingURL=item.model.js.map