import createHttpError from 'http-errors';
import { registerUser, loginUser, logoutUser } from '../services/user.js';

export const registerUserController = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);
    const { accessToken } = await loginUser(req.body);
    res.status(201).json({
      status: 201,
      message: 'User registered successfully!',
      data: { user, accessToken },
    });
  } catch (error) {
    next(createHttpError(400, error.message));
  }
};

export const loginUserController = async (req, res, next) => {
  try {
    const { accessToken } = await loginUser(req.body);
    res.status(200).json({
      status: 200,
      message: 'User logged in successfully!',
      data: { accessToken },
    });
  } catch (error) {
    next(createHttpError(400, error.message));
  }
};

export const logoutUserController = async (req, res, next) => {
  try {
    const response = await logoutUser();
    res.status(200).json({
      status: 200,
      message: response.message,
    });
  } catch (error) {
    next(createHttpError(400, error.message));
  }
};
