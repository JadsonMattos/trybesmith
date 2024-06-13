"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const productsRouter = (0, express_1.Router)();
productsRouter.post('/products', product_controller_1.default.create);
productsRouter.get('/products', product_controller_1.default.getAll);
exports.default = productsRouter;
