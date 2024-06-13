import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller';
import { ResponseService } from '../../../src/types/ResponseService';
import { Token } from '../../../src/types/Token';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Será validado que é possível fazer login com sucesso', async function () {
    req.body = loginMock.validLoginBody;
    const token = { token: 'm1nh4t0k3nbcr1p7v4l1d4' }
    const serviceResponse: ResponseService<Token> = {
        status: 'SUCCESSFUL',
        data: token,
      }
      sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);
      await loginController.login(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(token);
  });
});
