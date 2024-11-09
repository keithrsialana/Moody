import { Optional as _Optional, DataTypes, Model, Sequelize } from "sequelize";
import { Song } from "./Song.js";

interface PlaylistAttributes {
    id: number,
    userId: number,
    songs: Song[],
}

interface PlaylistCreationAttributes extends _Optional<PlaylistAttributes, "id"> { }

export class Playlist extends Model<PlaylistAttributes, PlaylistCreationAttributes> implements PlaylistAttributes {
    public id!: number;
    public userId!: number;
    public songs!: Song[];

    public readonly created_at!: Date;
    public readonly updated_at!: Date;

    public async addSong(song: Song) {
        this.songs.push(song);
    }
}

export function PlaylistFactory(sequelize: Sequelize): typeof Playlist {
    Playlist.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            songs: {
                type: DataTypes.ARRAY,
                allowNull: true,
            }
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