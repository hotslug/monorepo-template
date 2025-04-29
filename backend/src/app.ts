import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config';
import authRoutes from './routes/authRoutes';
import dashboardRoutes from './routes/dashboardRoutes';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit');
  res.json({ message: 'Backend is working!' });
});

app.use('/api/auth', authRoutes);
app.use('/api/dashboard-data', dashboardRoutes);
app.get('/', (req, res) => {
  res.send('API running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
