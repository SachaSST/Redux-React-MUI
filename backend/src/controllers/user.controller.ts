import { Request, Response } from 'express';
import * as userManager from '../managers/user.manager';

export const register = async (req: Request, res: Response) => {
  try {
    const newUser = await userManager.register(req.body.username, req.body.email, req.body.password);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { token, user } = await userManager.login(req.body.email, req.body.password);
    res.status(200).json({ token, user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  res.status(200).json(req.user);
};