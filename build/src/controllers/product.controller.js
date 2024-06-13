"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_service_1 = __importDefault(require("../services/products.service"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
async function create(req, res) {
    const { name, price, orderId } = req.body;
    const product = await products_service_1.default.create({ name, price, orderId });
    if (product.status !== 'SUCCESSFUL') {
        return res.status((0, mapStatusHTTP_1.default)(product.status)).json(product.data);
    }
    res.status(201).json(product.data);
}
async function getAll(req, res) {
    const products = await products_service_1.default.getAll();
    res.status(200).json(products.data);
}
exports.default = {
    create,
    getAll,
};
