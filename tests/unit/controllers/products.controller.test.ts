import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsMock from '../../mocks/products.mock';
import { ResponseService } from '../../../src/types/ResponseService';
import { Product } from '../../../src/types/Product';
import productsService from '../../../src/services/products.service';
import productController from '../../../src/controllers/product.controller';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('POST /products', function () {
    it('Será validado que é possível cadastrar um produto com sucesso', async () => {
      req.body = productsMock.validProduct;
      const serviceResponse: ResponseService<Product> = {
        status: 'SUCCESSFUL',
        data: productsMock.validResponse,
      }
      sinon.stub(productsService, 'create').resolves(serviceResponse);
      await productController.create(req, res);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(productsMock.validResponse);
    });
  })

  describe('GET /products', function () {
    it('Será validado que é possível listar todos os produtos com sucesso', async () => {
      const serviceResponse: ResponseService<Product[]> = {
        status: 'SUCCESSFUL',
        data: [productsMock.validList],
      }
      sinon.stub(productsService, 'getAll').resolves(serviceResponse);
      await productController.getAll(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith([productsMock.validList]);
    });
  })
});
