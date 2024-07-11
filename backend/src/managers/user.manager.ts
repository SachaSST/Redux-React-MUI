import User, { IUser } from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface IRegisterResponse {
  username: string;
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
  user: IUser;
}

export const register = async (username: string, email: string, password: string): Promise<IRegisterResponse> => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  return {
    username: newUser.username,
    email: newUser.email,
    password: newUser.password,
  };
};

export const login = async (email: string, password: string): Promise<ILoginResponse> => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const payload = { userId: user._id };
  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });

  return { token, user };
};