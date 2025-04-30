import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

export const registerUser = async (req: Request, res: Response) => {
  const { email, password, first_name } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      password: hashedPassword,
      first_name,
    });

    const token = jwt.sign({ id: user._id, first_name: user.first_name }, process.env.JWT_SECRET!, {
      expiresIn: '30d',
    });

    res.status(201).json({
      _id: user._id,
      email: user.email,
      first_name: user.first_name,
      token,
    });
  } catch (error: unknown) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, first_name: user.first_name }, process.env.JWT_SECRET!, {
      expiresIn: '30d',
    });

    res.json({
      _id: user._id,
      email: user.email,
      first_name: user.first_name,
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
