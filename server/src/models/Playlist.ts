import { Optional as _Optional, DataTypes, Model, Sequelize } from "sequelize";

interface PlaylistAttributes {
    id: number,
    name: string,
    user_username: string,
}

interface PlaylistCreationAttributes extends _Optional<PlaylistAttributes, "id"> { }

export class Playlist extends Model<PlaylistAttributes, PlaylistCreationAttributes> implements PlaylistAttributes {
    public id!: number;
    public name!: string;
    public user_username!: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

export function PlaylistFactory(sequelize: Sequelize): typeof Playlist {
    Playlist.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.INTEGER,
            },
            user_username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
			tableName: "playlists",
			sequelize,
			hooks: {
				afterValidate: async (playlist: Playlist) => {
				},
				beforeUpdate: async (playlist: Playlist) => {
				},
			},
			timestamps: true,
			underscored: true,
			freezeTableName: true,
		}
    );

    return Playlist;
}