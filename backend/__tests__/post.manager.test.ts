import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import PostModel, { IPost } from '../src/models/post.model';
import {
  getPosts,
  createPost,
  editPost,
  deletePost,
  setCompleted,
  setRecurrent,
} from '../src/managers/post.manager';

let mongoServer: MongoMemoryServer;

const postData = {
  message: 'Test message',
  dueDate: new Date(),
  reccurence: 'daily',
  uniqueDate: new Date(),
};

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe('Post Manager', () => {
  beforeEach(async () => {
    await PostModel.deleteMany({});
  });

  it('should create a new post', async () => {
    const post = await createPost(postData);
    expect(post).toHaveProperty('message', postData.message);
    expect(post).toHaveProperty('dueDate', postData.dueDate);
    expect(post).toHaveProperty('reccurence', postData.reccurence);
    expect(post).toHaveProperty('uniqueDate', postData.uniqueDate);
  });

  it('should get all posts', async () => {
    await createPost(postData);
    const posts = await getPosts();
    expect(posts.length).toBe(1);
    expect(posts[0]).toHaveProperty('message', postData.message);
  });

  it('should edit a post', async () => {
    const post = await createPost(postData);
    const updatedData = { message: 'Updated message' };
    const updatedPost = await editPost(post._id!.toString(), updatedData);  
    expect(updatedPost).toHaveProperty('message', 'Updated message');
  });

  it('should delete a post', async () => {
    const post = await createPost(postData);
    await deletePost(post._id!.toString());  
    const posts = await getPosts();
    expect(posts.length).toBe(0);
  });

  it('should set a post as completed', async () => {
    const post = await createPost(postData);
    await setCompleted(post._id!.toString(), true);  
    const updatedPost = await PostModel.findById(post._id);
    expect(updatedPost).toHaveProperty('completed', true);
  });

  it('should set a post as not completed', async () => {
    const post = await createPost(postData);
    await setCompleted(post._id!.toString(), false);  
    const updatedPost = await PostModel.findById(post._id);
    expect(updatedPost).toHaveProperty('completed', false);
  });

  it('should set a post as recurrent', async () => {
    const post = await createPost(postData);
    const newReccurence = 'weekly';
    await setRecurrent(post._id!.toString(), newReccurence);  
    const updatedPost = await PostModel.findById(post._id);
    expect(updatedPost).toHaveProperty('reccurence', newReccurence);
  });
});