import { Request, Response } from "express";
import { User } from "../models";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class Authentication {
	async login(req: Request, res: Response): Promise<any> {
		const { username, password } = req.body; // Extract username and password from request body

		// Find the user in the database by username
		const user = await User.findOne({
			where: { username },
		});

		// If user is not found, send an authentication failed response
		if (!user) {
			return res.status(401).json({ message: "Authentication failed" });
		}

		// Compare the provided password with the stored hashed password
		const passwordIsValid = await bcrypt.compare(password, user.password);
		// If password is invalid, send an authentication failed response
		if (!passwordIsValid) {
			return res.status(401).json({ message: "Authentication failed" });
		}

		// Get the secret key from environment variables
		const secretKey = process.env.JWT_SECRET_KEY || "";

		// Generate a JWT token for the authenticated user
		const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
		return res.status(200).json({ token }); // Send the token as a JSON response
	}

	async register(req: Request, res: Response): Promise<any>{
		const {username,password} = req.body;
		try {
			await User.create({
				username:username,
				password:password,
			});
	
			// Get the secret key from environment variables
			const secretKey = process.env.JWT_SECRET_KEY || "";
			// Generate a JWT token for the authenticated user
			const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
			return res.status(200).json({ token }); // Send the token as a JSON response
		} catch (error:any) {
			return res.status(401).json({message: "Another account with that username already exists"});
		}
	}
}

export default new Authentication();
