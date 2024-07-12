import UserModel from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (username: string, email: string, password: string) => {
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  console.log('Hashed Password:', hashedPassword);

  const newUser = new UserModel({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  return newUser;
};

export const login = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  console.log('User Found:', user); 

  const isMatch = await bcrypt.compare(password, user.password);
  console.log('Password Match:', isMatch); 

  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const payload = { userId: user._id };
  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });

  return { token, user };
};