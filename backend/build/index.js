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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = __importDefault(require("./models/user.model"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.status(200).send("Hello world");
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Running server on port ${port}`);
    let uri = process.env.MONGO_URI;
    if (typeof (uri) === undefined) {
        console.error("No mongo uri was specified. Please add it to your local .env file under 'MONGO_URI'");
    }
    yield mongoose_1.default.connect(process.env.MONGO_URI);
    let user = new user_model_1.default({ name: 'heroku!', password: "password" });
    user.save();
}));
