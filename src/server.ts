import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import { verifyToken } from './middleware/authMiddleware';

const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5002', // Change this to your frontend's URL
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/profile', verifyToken, (req, res) => {
  res.send('This is a protected route');
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'your_mongodb_uri_here';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });
