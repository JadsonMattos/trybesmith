"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
const ordersRouter = (0, express_1.Router)();
ordersRouter.get('/orders', order_controller_1.default.getAll);
exports.default = ordersRouter;
