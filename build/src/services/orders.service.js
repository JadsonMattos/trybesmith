"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = __importDefault(require("../database/models/order.model"));
const product_model_1 = __importDefault(require("../database/models/product.model"));
async function getAll() {
    const orders = await order_model_1.default.findAll({ include: [{ model: product_model_1.default,
                as: 'productIds',
                attributes: {
                    exclude: ['name', 'price', 'orderId'],
                } }] });
    const data = orders.map((order) => order.dataValues);
    const formattedOrders = data.map((order) => {
        var _a;
        return ({
            id: order.id,
            userId: order.userId,
            productIds: (_a = order.productIds) === null || _a === void 0 ? void 0 : _a.map((product) => product.id)
        });
    });
    const responseService = {
        status: 'SUCCESSFUL', data: formattedOrders,
    };
    return responseService;
}
exports.default = {
    getAll,
};
