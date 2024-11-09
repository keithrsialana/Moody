import { Request, Response } from "express";
import { User } from "../models/index.js";

// Get all users
export const getUsers = async (_req: Request, res: Response): Promise<void> => {
	try {
		const users = await User.findAll();
		res.status(200).json(users);
	} catch (error: any) {
		res
			.status(500)
			.json({ message: "Error fetching users", error: error.message });
	}
};

// Get a user by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
	try {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			res.status(404).json({ message: "User not found" });
			return;
		}
		res.status(200).json(user);
	} catch (error: any) {
		res
			.status(500)
			.json({ message: "Error fetching user", error: error.message });
	}
};

export const getUserByUsername = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		// req.params.name
		const user = await User.findOne({
			where: { username: req.params.username },
		});
		if (!user) {
			res.status(404).json({ message: "User not found" });
			return;
		}
		res.status(200).json(user);
	} catch (error: any) {
		res.status(500).json({ message: "Error fetching user", error: error.message });
	}
};
