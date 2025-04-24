import { userCollection } from '../db/models/user.js';
import bcrypt from 'bcrypt';
import { generateAccessToken } from '../utils/jwtUtils.js';

export const registerUser = async (userData) => {
  const { username, email, password } = userData;
  const existingUser = await userCollection.findOne({
    $or: [{ username }, { email }],
  });
  if (existingUser) {
    throw new Error('Username or email already exists');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await userCollection.create({
    username,
    email,
    password: hashedPassword,
  });

  return {
    username: newUser.username,
    email: newUser.email,
  };
};

export const loginUser = async (credentials) => {
  const { email, password } = credentials;
  const user = await userCollection.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  const accessToken = generateAccessToken(user._id);
  return { accessToken };
};

export const logoutUser = async () => {
  return { message: 'User logged out successfully' };
};
