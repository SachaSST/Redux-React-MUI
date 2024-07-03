// src/controllers/userController.ts
import { Request, Response } from 'express';
import { createUser, getUserByEmail } from '../managers/userManager';

export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const user = await createUser(email, password);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};
