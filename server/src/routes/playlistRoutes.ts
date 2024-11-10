import { Router } from "express";
import { createPlaylist, deleteplaylist, getAllPlaylists, updatePlaylistName } from "../controllers/playlistController.js";
const router = Router();

router.post("/add", createPlaylist);
router.post("/remove", deleteplaylist);
router.post("/update", updatePlaylistName);
router.get("/", getAllPlaylists);

export default router;
