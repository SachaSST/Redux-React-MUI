import { expect } from 'chai';
import request from 'supertest';
import { app } from '../server';
import PostModel from '../src/models/post.model';

describe('Post API', () => {
  beforeAll(async () => {
    await PostModel.deleteMany({});
  });

  describe('POST /post', () => {
    it('should create a new post', async () => {
      const post = {
        message: 'Test message',
        dueDate: new Date(),
        reccurence: 'daily',
      };
      const res = await request(app).post('/post').send(post);
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('message', 'Test message');
    });

    it('should not create a post with conflicting due date', async () => {
      const post = {
        message: 'Conflicting message',
        dueDate: new Date(),
        reccurence: 'daily',
      };
      const res = await request(app).post('/post').send(post);
      expect(res.status).to.equal(400);
      expect(res.body).to.have.property('message');
    });
  });

  describe('GET /post', () => {
    it('should get all posts', async () => {
      const res = await request(app).get('/post');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    });
  });
});