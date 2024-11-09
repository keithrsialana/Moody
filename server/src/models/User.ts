import { Model, DataTypes, Sequelize, Optional as _Optional } from "sequelize";
import bcrypt from "bcrypt";

interface UserAttributes {
	id: number;
	username: string;
	first_name: string | null;
	last_name: string | null;
	password: string;
	email: string | null;
	location: string | null;
	bio: string | null;
}

interface UserCreationAttributes extends _Optional<UserAttributes, "id"> {}

export class User
	extends Model<UserAttributes, UserCreationAttributes>
	implements UserAttributes
{
	public id!: number;
	public username!: string;
	public first_name!: string | null;
	public last_name!: string | null;
	public password!: string;
	public email!: string | null;
	public location!: string | null;
	public bio!: string | null;

	public readonly created_at!: Date;
	public readonly updated_at!: Date;

	public async setPassword(password: string) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(password, saltRounds);
	}
}

export function UserFactory(sequelize: Sequelize): typeof User {
	// Initialize the User model with Sequelize
	User.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: true,
			},
			location: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			bio: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			tableName: "users",
			sequelize,
			hooks: {
				afterValidate: async (user: User) => {
					// Now, user.password is accessible because it's already set
					const { password } = user;
					// Hash the password here
					await user.setPassword(password);
				},
				beforeUpdate: async (user: User) => {
					const userObj = user.toJSON();
					const { password } = userObj;
					if (user.changed("password")) {
						await user.setPassword(password);
					}
				},
			},
			timestamps: true,
			underscored: true,
			freezeTableName: true,
		}
	);

	return User;
}
