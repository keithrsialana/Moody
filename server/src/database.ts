import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();
console.log(process.env.DB_USER, process.env.DB_PASSWORD);
const sequelize = process.env.DB_URL
	? new Sequelize(process.env.DB_URL)
	: new Sequelize(
        process.env.DB_NAME || "",
        process.env.DB_USER || "",
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "postgres",
            dialectOptions: {
                decimalNumbers: true,
            },
        }
	);

export default sequelize;
