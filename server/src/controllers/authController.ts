import { User } from "../models/User.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

	export const login = async (req:any, res:any) => {
		const { username, password } = req.body; // Extract username and password from request body

		// Find the user in the database by username
		const data:any = await User.findOne({
			where: { username },
		});

		const user = data?.toJSON();

		// If user is not found, send an authentication failed response
		if (!user.username) {
			return res.status(401).json({ message: "Authentication failed" });
		}

		// Compare the provided password with the stored hashed password
		const passwordIsValid = await bcrypt.compare(password, user.password);
		// If password is invalid, send an authentication failed response
		if (!passwordIsValid) {
			return res.status(401).json({ message: "Wrong password" });
		}

		// Get the secret key from environment variables
		const secretKey = process.env.JWT_SECRET_KEY || "";

		// Generate a JWT token for the authenticated user
		const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
		return res.status(200).json({ token }); // Send the token as a JSON response
	}

	export const register = async (req:any, res:any) => {
		const {username,password} = req.body;
		try {
			const newUser = await User.create({
				username:username,
				password:password,
			});
	
			// Get the secret key from environment variables
			const secretKey = process.env.JWT_SECRET_KEY || "";
			// Generate a JWT token for the authenticated user
			const token = jwt.sign({ username:newUser.username }, secretKey, { expiresIn: "1h" });
			return res.status(200).json({ token }); // Send the token as a JSON response
		} catch (error:any) {
			return res.status(401).json({message: "Another account with that username already exists"});
		}
	}
