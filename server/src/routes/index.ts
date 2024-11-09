import express from 'express';
import userRoutes from './userRoutes.js';
import spotifyRoutes from './spotifyRoutes.js';
import authRoutes from './authRoutes.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.use('/api', authenticateToken, userRoutes);
router.use('/spotify', spotifyRoutes);
router.use('/auth', authRoutes);

export default router;