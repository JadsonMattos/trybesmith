import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getAll(req: Request, res: Response) {
  const orders = await ordersService.getAll();
  res.status(200).json(orders.data);
}

export default {
  getAll,
};