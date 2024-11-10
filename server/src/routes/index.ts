import express from 'express';
import userRoutes from './userRoutes.js';
import spotifyRoutes from './spotifyRoutes.js';
import authRoutes from './authRoutes.js';
import songRoutes from './songRoutes.js';
import playlistRoutes from './playlistRoutes.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.use('/api', authenticateToken, userRoutes);
router.use('/spotify', spotifyRoutes);
router.use('/auth', authRoutes);
router.use('/songs', songRoutes);
router.use('/playlists', playlistRoutes);

export default router;