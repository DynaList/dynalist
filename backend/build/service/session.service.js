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
exports.reIssueAccessToken = exports.updateSession = exports.findSessions = exports.createSession = void 0;
const lodash_1 = require("lodash");
const session_model_1 = __importDefault(require("../models/session.model"));
const jwt_utils_1 = require("../utils/jwt.utils");
const user_service_1 = require("./user.service");
function createSession(userId, userAgent) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = yield session_model_1.default.create({ user: userId, userAgent });
        console.log({ "Session created": session });
        return session.toJSON();
    });
}
exports.createSession = createSession;
function findSessions(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return session_model_1.default.find(query).populate({
            path: "user",
            select: ["firstName", "lastName", "zip", "groups"],
            populate: {
                path: 'groups'
            }
        });
    });
}
exports.findSessions = findSessions;
function updateSession(query, update) {
    return __awaiter(this, void 0, void 0, function* () {
        return session_model_1.default.updateOne(query, update);
    });
}
exports.updateSession = updateSession;
function reIssueAccessToken({ refreshToken, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { decoded } = (0, jwt_utils_1.verifyJwt)(refreshToken);
        console.log({ decoded: decoded });
        if (!decoded || !(0, lodash_1.get)(decoded, "session"))
            return false;
        const [session] = yield session_model_1.default.find({
            $or: [
                { _id: (0, lodash_1.get)(decoded, "session"), valid: true },
                { user: (0, lodash_1.get)(decoded, "_id"), valid: true },
            ],
        });
        console.log({ session: session });
        if (!session || !session.valid)
            return false;
        const user = yield (0, user_service_1.findUser)(session.user);
        console.log({ "User from reIssueAccessToken": user });
        if (!user)
            return false;
        const accessToken = (0, jwt_utils_1.signJwt)(Object.assign(Object.assign({}, user), { session: session._id }), { expiresIn: process.env.ACCESS_TOKEN_TTL } // 15 minutes
        );
        return accessToken;
    });
}
exports.reIssueAccessToken = reIssueAccessToken;
//# sourceMappingURL=session.service.js.map