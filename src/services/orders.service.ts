import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { ResponseService } from '../types/ResponseService';

async function getAll(): Promise<ResponseService<Order[]>> {
  const orders = await OrderModel.findAll({ include: [{ model: ProductModel,
    as: 'productIds',
    attributes: {
      exclude: ['name', 'price', 'orderId'],
    } }] });
  const data = orders.map((order) => order.dataValues);
  const formattedOrders: Order[] = data.map((order) => ({
    id: order.id,
    userId: order.userId,
    productIds: order.productIds?.map((product: any) => product.id) }));
  const responseService: ResponseService<Order[]> = {
    status: 'SUCCESSFUL', data: formattedOrders,
  };
  return responseService;
}

export default {
  getAll,
};