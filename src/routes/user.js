import { Router } from 'express';
import {
  registerUserController,
  loginUserController,
  logoutUserController,
} from '../controllers/user.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const authRouter = Router();

authRouter.post('/register', ctrlWrapper(registerUserController));
authRouter.post('/login', ctrlWrapper(loginUserController));
authRouter.post('/logout', ctrlWrapper(logoutUserController));

export default authRouter;
