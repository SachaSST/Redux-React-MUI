import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import User from '../src/models/user.model';

chai.use(chaiHttp);

describe('User API', () => {
  before(async () => {
    await User.deleteMany({});
  });

  describe('POST /user/register', () => {
    it('should register a new user', (done) => {
      const user = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      };
      chai.request(server)
        .post('/user/register')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('username', 'testuser');
          done();
        });
    });

    it('should not register a user with existing email', (done) => {
      const user = {
        username: 'testuser2',
        email: 'test@example.com',
        password: 'password123'
      };
      chai.request(server)
        .post('/user/register')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message');
          done();
        });
    });
  });

  describe('POST /user/login', () => {
    it('should login an existing user', (done) => {
      const user = {
        email: 'test@example.com',
        password: 'password123'
      };
      chai.request(server)
        .post('/user/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token');
          done();
        });
    });

    it('should not login with incorrect password', (done) => {
      const user = {
        email: 'test@example.com',
        password: 'wrongpassword'
      };
      chai.request(server)
        .post('/user/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message');
          done();
        });
    });
  });
});