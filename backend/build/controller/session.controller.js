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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSessionHandler = exports.getSessionsHandler = exports.createSessionHandler = void 0;
const user_service_1 = require("../service/user.service");
const session_service_1 = require("../service/session.service");
const jwt_utils_1 = require("../utils/jwt.utils");
function createSessionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield (0, user_service_1.validatePassword)(req.body);
        if (!user)
            return res.status(401).send("Invalid email or password.");
        const session = yield (0, session_service_1.createSession)(user._id, req.get("userAgent") || "");
        // Create an access token
        const accessToken = (0, jwt_utils_1.signJwt)(Object.assign(Object.assign({}, user), { session: session._id }), { expiresIn: `${process.env.ACCESS_TOKEN_TTL}` });
        // Create a refresh token
        const refreshToken = (0, jwt_utils_1.signJwt)(Object.assign(Object.assign({}, user), { session: session._id }), { expiresIn: `${process.env.REFRESH_TOKEN_TTL}` });
        // Return access and refresh tokens
        return res.send({ accessToken, refreshToken });
    });
}
exports.createSessionHandler = createSessionHandler;
function getSessionsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("res.locals.user:", res.locals.user);
        const userId = res.locals.user._id;
        const sessions = yield (0, session_service_1.findSessions)({ user: userId, valid: true });
        console.log(sessions);
        return res.send(sessions[0]);
    });
}
exports.getSessionsHandler = getSessionsHandler;
function deleteSessionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionId = res.locals.user.session;
        yield (0, session_service_1.updateSession)({ _id: sessionId }, { valid: false });
        return res.send({ accessToken: null, refreshToken: null });
    });
}
exports.deleteSessionHandler = deleteSessionHandler;
//# sourceMappingURL=session.controller.js.map