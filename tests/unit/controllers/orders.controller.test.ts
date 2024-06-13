import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { ResponseService } from '../../../src/types/ResponseService';
import { Order } from '../../../src/types/Order';
import ordersMock from '../../mocks/orders.mock';
import orderService from '../../../src/services/orders.service';
import orderController from '../../../src/controllers/order.controller';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('GET /orders', function () {
    it('Será validado que é possível listar todos os pedidos com sucesso', async () => {
      const serviceResponse: ResponseService<Order[]> = {
        status: 'SUCCESSFUL',
        data: [ordersMock.validResponse],
      }
      sinon.stub(orderService, 'getAll').resolves(serviceResponse);
      await orderController.getAll(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith([ordersMock.validResponse]);
    });
  })
});
