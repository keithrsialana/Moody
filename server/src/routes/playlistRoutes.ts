import { Router } from "express";
import { createPlaylist, deleteplaylist } from "../controllers/playlistController";
const router = Router();

router.post("/add", createPlaylist);
router.post("/remove", deleteplaylist);

export default router;
