"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        firstName: (0, zod_1.string)({ required_error: "First name is required" }),
        lastName: (0, zod_1.string)({ required_error: "Last name is required" }),
        password: (0, zod_1.string)({ required_error: "Password is required" }),
        // passwordConfirmation: string({
        //   required_error: "Password confirmation is required",
        // }),
        email: (0, zod_1.string)({ required_error: "Email is required" }).email("Not a valid email"),
        country: (0, zod_1.string)(),
        street: (0, zod_1.string)(),
        city: (0, zod_1.string)(),
        state: (0, zod_1.string)(),
        zip: (0, zod_1.string)(),
        groups: (0, zod_1.array)((0, zod_1.string)())
    }),
    // .refine((data) => data.password === data.passwordConfirmation, {
    //   message: "Passwords do not match",
    //   path: ["passwordConfirmation"],
    // }),
});
//# sourceMappingURL=user.schema.js.map