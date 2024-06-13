import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginMock from '../../mocks/login.mock';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Será validado que o campo "username" é enviado', async function () {
    const httpRequestBody = loginMock.noUsernameLoginBody
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });

  it('Será validado que o campo "password" é enviado', async function () {
    const httpRequestBody = loginMock.noPasswordLoginBody
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });

  it('Será validado que não é possível fazer login com um username inválido', async function () {
    const httpRequestBody = loginMock.invalidUsername;
    sinon.stub(UserModel, 'findOne').resolves(null);
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it('Será validado que não é possível fazer login com uma senha inválida', async function () {
    const httpRequestBody = loginMock.invalidUsername;
    sinon.stub(UserModel, 'findOne').resolves(null);
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it('Será validado que não é possível fazer login com uma senha inválida', async function () {
    const httpRequestBody = loginMock.existingUserWithWrongPasswordBody 
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });
});
