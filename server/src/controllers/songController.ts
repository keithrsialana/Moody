import { Request, Response } from "express";
import { Song } from "../models/Song.js";

export const getAllSongsByPlaylist = async (_req:Request, res:Response): Promise<void> => {
	try {
		// TODO: Need to figure out how to get playlist ID from request to implement this
	} catch (error) {
		
	}
}

export const createSong = async (_req: Request, res: Response): Promise<void> => {
	try {

		// TODO: Something about this is wrong. Need to figure out how to get the playlist ID from the request.
		const { song, username } = _req.body;

		const songObj = {
			song_name: song.song_name,
			artist: song.artist,
			album: song.album,
			link: song.link,
			length: song.length,
			cover_link: song.cover_link,
			user_playlist_id: song.user_playlist_id
		}

		Song.create(songObj)
		.then(dbSong => {
			if (dbSong)
				res.status(200).json("A new song object was created");
			else
				res.status(417).json("Something went wrong with trying to create a song into the database");
		})

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