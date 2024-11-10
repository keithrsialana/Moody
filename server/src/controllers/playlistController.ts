import { Request, Response } from "express";
import { Playlist } from "../models/index.js";

export const getAllPlaylists = async (_req: Request, res: Response): Promise<void> => {
	try {
		const {username} = _req.body;

		await Playlist.findAll({
			where:{
				user_username: username
			}
		}).then((playlists) => {
			if (playlists && playlists.length > 0)
				res.status(200).json({playlists});
			else
				res.status(200).json({message: "Could not find any playlists under your username"});
		})
	} catch (error) {
		res.status(417).json({message:"Something went wrong with finding the user's playlists: ", error});
	}
}

export const createPlaylist = async (_req: Request, res: Response): Promise<void> => {
	try {
		const { username, playlist_name } = _req.body;

		const playlistObj = {
			name: playlist_name,
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

		Playlist.destroy({
			where: {
				user_username: username,
				name: playlist_name
			},
		})
			.then((deletedCount) => {
				if (deletedCount > 0) {
					res.status(200).json('Playlist deleted successfully');
				} else {
					res.status(200).json('No playlist found with the specified condition.');
				}
			})
			.catch((error) => {
				res.status(417).json({ message: 'Error deleting playlist:', error });
			});
		res.status(200).json("Successfully added song to the playlist");
	} catch (error) {
		res
			.status(417)
			.json("Something went wrong with trying to add the song to the playlist");
	}
};

export const updatePlaylistName = async (_req: Request, res: Response): Promise<void> => {
	try {
		const { username, playlist_name, new_playlist_name } = _req.body;

		await Playlist.update(
			{ name: new_playlist_name },
			{
				where: { user_username: username, name: playlist_name }
			}
		)
			.then(([affectedRows]) => {
				if (affectedRows > 0) {
					res.status(200).json(`${affectedRows} playlist(s) updated successfully.`);
				} else {
					res.status(200).json('No playlists found with the specified condition.');
				}
			})
			.catch((error) => {
				res.status(417).json({ message: 'Error updating playlist:', error });
			});

	} catch (error) {
		res.status(417).json("Something went wrong when trying to update the playlist name");
	}
}
