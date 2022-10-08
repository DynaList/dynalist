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
const lodash_1 = require("lodash");
const jwt_utils_1 = require("../utils/jwt.utils");
const session_service_1 = require("../service/session.service");
const deserializeUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = (0, lodash_1.get)(req.headers, "authorization", "").replace(/^Bearer\s/, "");
    console.log("First check of accessToken: ", accessToken);
    if (!accessToken)
        return next();
    const { decoded, expired } = (0, jwt_utils_1.verifyJwt)(accessToken);
    if (!expired) {
        res.locals.user = decoded;
        console.log({ validToken: decoded });
        return next();
    }
    const refreshToken = (0, lodash_1.get)(req, "headers.xrefresh");
    if (expired && refreshToken) {
        const newAccessToken = yield (0, session_service_1.reIssueAccessToken)({ refreshToken });
        console.log({ "Generate newAccessToken": newAccessToken });
        if (newAccessToken) {
            res.setHeader("Authorization", `Bearer ${newAccessToken}`);
            console.log("Assign newAccessToken");
            const result = (0, jwt_utils_1.verifyJwt)(newAccessToken);
            res.locals.user = result.decoded;
            console.log({ "From newAccessToken": res.locals.user._doc });
        }
        return next();
    }
    return next();
});
exports.default = deserializeUser;
//# sourceMappingURL=deserializeUser.js.map