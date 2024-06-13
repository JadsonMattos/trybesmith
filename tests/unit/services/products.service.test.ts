import { expect } from 'chai';
import sinon from 'sinon';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/products.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('POST /products', function () {
    it('Será validado que é possível cadastrar um produto com sucesso', async () => {
      const parameters = productsMock.validProduct;
      const createReturnMock = ProductModel.build(productsMock.validResponse);
      sinon.stub(ProductModel, 'create').resolves(createReturnMock);
      const serviceResponse = await productService.create(parameters);
      expect(serviceResponse.status).to.eq('SUCCESSFUL');
      expect(serviceResponse.data).to.be.deep.equal(productsMock.validResponse);
    })
  })

  describe('GET /products', function () {
    it('Será validado que é possível listar todos os produtos com sucesso', async () => {
      const getAllReturnMock = ProductModel.build(productsMock.validList);
      sinon.stub(ProductModel, 'findAll').resolves([getAllReturnMock]);
      const serviceResponse = await productService.getAll();
      expect(serviceResponse.status).to.eq('SUCCESSFUL');
      expect(serviceResponse.data).to.be.deep.equal([productsMock.validList]);
    })
  })
});
