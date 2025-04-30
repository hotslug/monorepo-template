import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  first_name: string;
}

declare module 'express' {
  interface Request {
    user?: JwtPayload;
  }
}

export const protect = (req: Request, res: Response, next: NextFunction): void => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]; // Extract token from "Bearer <token>"

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

      req.user = decoded; // Attach user data to request

      next(); // Continue to controller
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, invalid token' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};
