import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();
const sequelize = process.env.DATABASE_URL
	? new Sequelize(process.env.DATABASE_URL)
	: new Sequelize(
        process.env.DB_NAME || "",
        process.env.DB_USER || "",
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "postgres",
            dialectOptions: {
                decimalNumbers: true,
                charset: 'utf8mb4',
            },
        }
	);

export default sequelize;
