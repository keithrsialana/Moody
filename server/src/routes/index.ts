import express from 'express';
import userRoutes from './userRoutes';
import spotifyRoutes from './spotifyRoutes';
import authRoutes from './authRoutes';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.use('/api', authenticateToken, userRoutes);
router.use('/spotify', spotifyRoutes);
router.use('/auth', authRoutes);

export default router;