"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../database/models/product.model"));
const productValidation_middleware_1 = __importDefault(require("../middlewares/productValidation.middleware"));
async function create(product) {
    let responseService;
    const error = (0, productValidation_middleware_1.default)(product);
    if (error) {
        responseService = { status: error.status, data: { message: error.data } };
        return responseService;
    }
    const newProduct = await product_model_1.default.create(product);
    responseService = { status: 'SUCCESSFUL', data: newProduct.dataValues };
    return responseService;
}
async function getAll() {
    const products = await product_model_1.default.findAll();
    const responseService = {
        status: 'SUCCESSFUL', data: products.map((product) => product.dataValues),
    };
    return responseService;
}
exports.default = {
    create,
    getAll,
};
