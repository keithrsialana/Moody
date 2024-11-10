// TODO: None of this is being used to the Font-End
import express from 'express';
import { getUsers, getUserByUsername } from '../controllers/userController.js';

const router = express.Router();

// Route for getting all users
router.get('/users', getUsers);

// Route for getting a user by username
router.get('/user/:username', getUserByUsername);

export default router;
