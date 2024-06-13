"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : 'secret';
function sign(payload) {
    const token = jsonwebtoken_1.default.sign(payload, secret);
    return token;
}
function verify(token) {
    const data = jsonwebtoken_1.default.verify(token, secret);
    return data;
}
exports.default = {
    sign,
    verify,
};
