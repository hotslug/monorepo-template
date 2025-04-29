import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/authController';
import User from '../models/userModel';

const router = Router();

// Debug route to list all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, { email: 1, _id: 1 });
    console.log('All users:', users);
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
