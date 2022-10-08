"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const requireUser_1 = __importDefault(require("../middleware/requireUser"));
const session_schema_1 = require("../schema/session.schema");
const session_controller_1 = require("../controller/session.controller");
const sessionRouter = (0, express_1.Router)();
sessionRouter.post("/", (0, validateResource_1.default)(session_schema_1.createSessionSchema), session_controller_1.createSessionHandler);
sessionRouter.get("/", requireUser_1.default, session_controller_1.getSessionsHandler);
sessionRouter.delete("/", requireUser_1.default, session_controller_1.deleteSessionHandler);
exports.default = sessionRouter;
//# sourceMappingURL=session.routes.js.map