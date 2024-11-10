import { Request, Response } from "express";
import { Playlist } from "../models/index.js";

export const createPlaylist = async (_req: Request, res: Response): Promise<void> => {
	try {
		const { username, playlist_name } = _req.body;

        const playlistObj = {
            name:playlist_name,
            user_username: username
        }

        const newPlaylist = await Playlist.create(playlistObj);

        console.log(`New playlist has been created: ${newPlaylist.toJSON()}`);
		res.status(200).json("Successfully added song to the playlist");
	} catch (error) {
		res
			.status(417)
			.json("Something went wrong with trying to add the song to the playlist");
	}
};

export const deleteplaylist = async (_req: Request, res: Response): Promise<void> => {
	try {
		const { username, playlist_name } = _req.body;

        const result = await Playlist.destroy()
		res.status(200).json("Successfully added song to the playlist");
	} catch (error) {
		res
			.status(417)
			.json("Something went wrong with trying to add the song to the playlist");
	}
};
