import { Request, Response } from "express";
import { User } from "../models/index";
import bcrypt from "bcrypt"; // For password hashing

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
	try {
		const { username, password } = req.body;

		// Hash the password before saving
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await User.create({
			username,
			password: hashedPassword,
		});

		res.status(201).json({ message: "User created successfully", user: newUser });
	} catch (error: any) {
		res.status(500).json({ message: "User already exists", error: error.message });
	}
};

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

export const validateUser = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { username, password } = req.body;
	try {
		const dbUser = await User.findOne({
			where: { username: username },
		});
		// if the user has been found
		if (dbUser) {
			// compare passwords using bcrypt
			bcrypt.compare(password, dbUser.dataValues.password).then((isMatch) => {
				// return user object if valid, else, send error
				if (isMatch) res.status(200).json(dbUser);
				else res.status(404).json({ message: "Wrong password" });
			});
		} else {
			res.status(404).json({ message: "Could not find account" });
		}
	} catch (error: any) {
		res
			.status(500)
			.json({ message: "Error validating user", error: error.message });
	}
};
