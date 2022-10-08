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
const user_routes_1 = __importDefault(require("./user.routes"));
const session_routes_1 = __importDefault(require("./session.routes"));
const group_routes_1 = __importDefault(require("./group.routes"));
const list_routes_1 = __importDefault(require("./list.routes"));
const item_routes_1 = __importDefault(require("./item.routes"));
function routes(app) {
    app.get("/api/test", (req, res) => __awaiter(this, void 0, void 0, function* () {
        res.status(200).send("Endpoint working");
    }));
    app.use("/api/users", user_routes_1.default);
    app.use("/api/sessions", session_routes_1.default);
    app.use("/api/groups", group_routes_1.default);
    app.use("/api/lists", list_routes_1.default);
    app.use("/api/items", item_routes_1.default);
}
exports.default = routes;
//# sourceMappingURL=index.js.map