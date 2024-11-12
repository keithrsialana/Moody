import express from "express";
import { getMoodForOpenAI } from "../api/OpenAI.js";
// import openai from '../api/Spotify';
const router = express.Router();
import { Request, Response } from "express";
// router.post('/requestCode');

router.get("/api/data", (_req: Request, res: Response) => {
	res.status(200).json({ message: "Here’s the data" });
});

router.post("/api/data", async (req: Request, res: Response) => {
	// this calls when the client sends the mood to the server
	const { mood } = req.body;
	const openAiResponse = await getMoodForOpenAI(mood as string); // this calls the openai api, and we get a response back
	const songsArray = openAiResponse
		.split("|")
		.map((song) => song.trim().replace(/^\d+\.\s*/, "")) // remove the numbering, leading, and trailing spaces
		.filter((song) => song.length > 0)
		.map((song) => {
			// Split on either " - " or " by " (case-insensitive)
			const [songName, artist] = song
				.split(/ - | by /i)
				.map((str) => str.trim());
			return { songName, artist };
		});

	res.status(200).json({ message: `Received data!`, song_list: songsArray }); // the response is an object
});

export default router;
