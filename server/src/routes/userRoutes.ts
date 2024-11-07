import express from 'express';
import { createUser, getUsers, getUserByUsername, validateUser } from '../controllers/userController';

const router = express.Router();

// Route for creating a user
router.post('/users', createUser);

// Route for getting all users
router.get('/users', getUsers);

// Route for getting a user by username
router.get('/user/:username', getUserByUsername);

// Route for validating user login
router.post('/login', validateUser);

export default router;
