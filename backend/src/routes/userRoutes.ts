// src/routes/userRoutes.ts
import { Router } from 'express';
import { signUp } from '../controllers/userController';

const router = Router();

router.post('/signup', signUp);

export default router;
