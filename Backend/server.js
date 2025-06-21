import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();

// ✅ Define allowed origins (frontend Vercel + local dev)
const allowedOrigins = [
  'http://localhost:5173',
  'https://imagify-otji.vercel.app/'  // Replace with your actual frontend URL
];

// ✅ Use CORS with options
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Connect to MongoDB
await connectDB();

// ✅ Define routes
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

// ✅ Root route
app.get('/', (req, res) => res.send('API Working'));

// ✅ Global error handler (optional but helpful)
app.use((err, req, res, next) => {
  console.error('Internal server error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// ✅ Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
