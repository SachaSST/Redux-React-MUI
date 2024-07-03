// src/managers/userManager.ts
import User from '../models/User';
import bcrypt from 'bcryptjs';

export const createUser = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  return user;
};

export const getUserByEmail = async (email: string) => {
  return User.findOne({ email });
};
