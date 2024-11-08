import express from 'express';
import userRoutes from './userRoutes';
import spotifyRoutes from './spotifyRoutes';

const router = express.Router();

router.use('/api', userRoutes);
router.use('/spotify', spotifyRoutes);

export default router;