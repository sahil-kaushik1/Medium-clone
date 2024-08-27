"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogbody = exports.signinbody = exports.signupbody = void 0;
const zod_1 = require("zod");
exports.signupbody = zod_1.z.object({
    "email": zod_1.z.string().email(),
    "password": zod_1.z.string(),
    "name": zod_1.z.string()
});
exports.signinbody = zod_1.z.object({
    "email": zod_1.z.string().email(),
    "password": zod_1.z.string()
});
exports.blogbody = zod_1.z.object({
    "title": zod_1.z.string(),
    "content": zod_1.z.string()
});
