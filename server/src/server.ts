import express from "express";
import sequelize from "./database.js";
import allRoutes from "./routes/index.js";
import { User } from "./models/index.js";
import users from "./dbusers.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// Middleware for parsing JSON
app.use(express.static(path.join(__dirname, "../../client/dist")));
app.use(express.json());

// Use the user routes
app.use(allRoutes);

app.get("*", (_req, res) => {
	res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});

sequelize.sync({ force: true }).then(async () => {
	app.listen(port, () => {
		console.log(`Server is running on http://localhost:${port}`);
	});
	await User.bulkCreate(users)
		.then(() => console.log("Users inserted"))
		.catch((err) => console.error("Error inserting users:", err));
});
