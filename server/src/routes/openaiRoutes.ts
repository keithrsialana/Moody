import express from 'express';
import { getMoodForOpenAI } from '../api/OpenAI.js';
// import openai from '../api/Spotify';
const router = express.Router();
import { Request, Response } from "express";
// router.post('/requestCode');

router.get('/api/data', (_req: Request, res: Response) => {
  res.json({ message: "Here’s the data" });
});

router.post('/api/data', (req: Request, res: Response) => {
  const { mood } = req.body;
  const openAiResponse = getMoodForOpenAI(mood as string);
  console.log(openAiResponse);
  res.json({ message: `Received data: ${mood}` });
});




export default router;