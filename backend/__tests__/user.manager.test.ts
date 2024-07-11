import { register, login } from '../src/managers/user.manager';
import UserModel from '../src/models/user.model';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mockUser = {
  username: 'testuser',
  email: 'test@example.com',
  password: 'password123',
};

let mongoServer: MongoMemoryServer;

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

describe('User Manager', () => {
  beforeEach(async () => {
    await UserModel.deleteMany({});
  });

  it('should register a new user', async () => {
    const user = await register(mockUser.username, mockUser.email, mockUser.password);
    expect(user).toHaveProperty('username', mockUser.username);
    expect(user).toHaveProperty('email', mockUser.email);
  });

  it('should not register a user with an existing email', async () => {
    await register(mockUser.username, mockUser.email, mockUser.password);
    await expect(register(mockUser.username, mockUser.email, mockUser.password)).rejects.toThrow('User already exists');
  });

  it('should login a user with correct credentials', async () => {
    await register(mockUser.username, mockUser.email, mockUser.password);
    const { token, user } = await login(mockUser.email, mockUser.password);
    expect(token).toBeDefined();
    expect(user).toHaveProperty('email', mockUser.email);
  });

  it('should not login a user with incorrect credentials', async () => {
    await register(mockUser.username, mockUser.email, mockUser.password);
    await expect(login(mockUser.email, 'wrongpassword')).rejects.toThrow('Invalid credentials');
  });
});