import express from 'express';
import { getMoodForOpenAI } from '../api/OpenAI.js';
// import openai from '../api/Spotify';
const router = express.Router();
import { Request, Response } from "express";
// router.post('/requestCode');

router.get('/api/data', (_req: Request, res: Response) => {
  res.status(200).json({ message: "Here’s the data" });
});

router.post('/api/data', async (req: Request, res: Response) => {
  const { mood } = req.body;
  const openAiResponse = await getMoodForOpenAI(mood as string);
  res.status(200).json({ message: `Received data!`, data: openAiResponse });
});




export default router;