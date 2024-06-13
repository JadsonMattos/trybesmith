import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import orderService from '../../../src/services/orders.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('GET /orders', function () {
    it('Será validado que é possível listar todos os pedidos com sucesso', async () => {
      const getAllReturnMock = OrderModel.build(ordersMock.validResponse);
      sinon.stub(OrderModel, 'findAll').resolves([getAllReturnMock]);
      const serviceResponse = await orderService.getAll();
      expect(serviceResponse.status).to.eq('SUCCESSFUL');
    })
  })
});
