"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_util_1 = __importDefault(require("../utils/jwt.util"));
const user_model_1 = __importDefault(require("../database/models/user.model"));
async function verifyLogin(login) {
    if (!login.username || !login.password) {
        return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
    }
    const foundUser = await user_model_1.default.findOne({ where: { username: login.username } });
    if (!foundUser || !bcryptjs_1.default.compareSync(login.password, foundUser.dataValues.password)) {
        return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
    }
    const { id, username } = foundUser.dataValues;
    const token = jwt_util_1.default.sign({ id, username });
    return { status: 'SUCCESSFUL', data: { token } };
}
exports.default = {
    verifyLogin,
};
