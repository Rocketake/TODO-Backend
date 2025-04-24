import { Router } from 'express';
import authRouter from './user.js';
import todoRouter from './todo.js';

export const router = Router();

router.use('/todo', todoRouter);
router.use('/auth', authRouter);
