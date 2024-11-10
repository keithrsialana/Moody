import { Request, Response } from "express";
import { Song } from "../models/index.js";

export const createSong = async (_req: Request, res: Response): Promise<void> => {
	try {
		const { song, username } = _req.body;

		res.status(200).json("Successfully added song to the playlist");
	} catch (error) {
		res
			.status(417)
			.json("Something went wrong with trying to add the song to the playlist");
	}
};

export const deleteSong = async (
	_req: Request,
	res: Response
): Promise<void> => {
	try {
		res.status(200).json("Successfully removed song to the playlist");
	} catch (error) {
		res
			.status(417)
			.json(
				"Something went wrong with trying to remove the song from the playlist"
			);
	}
};