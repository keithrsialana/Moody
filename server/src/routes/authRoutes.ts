
import express from 'express';
import Authentication from '../controllers/authController';
const router = express.Router();

router.post('/login', Authentication.login);
router.post('/register', Authentication.register);

export default router;