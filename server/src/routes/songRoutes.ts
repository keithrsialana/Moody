import { Router } from "express";
import { createSong, deleteSong, getAllSongsByPlaylist } from "../controllers/songController";
const router = Router();

router.post("/add", createSong);
router.post("/remove", deleteSong);
router.post("/", getAllSongsByPlaylist);

export default router;
