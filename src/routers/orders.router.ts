import { Router } from 'express';
import orderController from '../controllers/order.controller';

const ordersRouter = Router();

ordersRouter.get('/orders', orderController.getAll);

export default ordersRouter;