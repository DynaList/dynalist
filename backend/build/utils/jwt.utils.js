"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accessKeys_1 = require("../accessKeys");
function signJwt(object, options) {
    return jsonwebtoken_1.default.sign(object, accessKeys_1.PRIVATE_KEY, Object.assign(Object.assign({}, (options && options)), { algorithm: "RS256" }));
}
exports.signJwt = signJwt;
function verifyJwt(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, accessKeys_1.PUBLIC_KEY);
        console.log({ "Decode from verifyJwt": decoded });
        return { valid: true, expired: false, decoded };
    }
    catch (e) {
        return {
            valid: false,
            expired: e.message === "jwt expired",
            decoded: null,
        };
    }
}
exports.verifyJwt = verifyJwt;
//# sourceMappingURL=jwt.utils.js.map