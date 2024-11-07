import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

export default class User extends Model {
    public id!: string;
    public username!: string;
    public first_name!: string | null;
    public last_name!: string | null;
    public password!: string;
    public email!: string | null;
    public location!: string | null;
    public bio!: string | null;
    public created_at!: string;
}

// Initialize the User model with Sequelize
User.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true,
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
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },
    {
        sequelize: sequelize,
        tableName: 'users',
        timestamps: false,
    }
);
