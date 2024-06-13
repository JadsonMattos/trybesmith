import { Request, Response } from 'express';
import productsService from '../services/products.service';

import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const product = await productsService.create({ name, price, orderId });
  if (product.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(product.status)).json(product.data);  
  }
  return res.status(201).json(product.data);
}

async function getAll(req: Request, res: Response) {
  const products = await productsService.getAll();
  return res.status(200).json(products.data);
}

export default {
  create,
  getAll,
};