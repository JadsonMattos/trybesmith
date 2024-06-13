"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_service_1 = __importDefault(require("../services/orders.service"));
async function getAll(req, res) {
    const orders = await orders_service_1.default.getAll();
    res.status(200).json(orders.data);
}
exports.default = {
    getAll,
};
