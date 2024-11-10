import { Optional as _Optional, DataTypes, Model, Sequelize } from "sequelize";

interface SongAttributes{
    id:number,
    name:string,
    artist:string,
    album:string,
    link:string,
    length:number
    cover_link:string;
    user_playlist_id:number;
}

interface SongCreationAttributes extends _Optional<SongAttributes, "id"> {}

export class Song extends Model<SongAttributes, SongCreationAttributes> implements SongAttributes {
    public id!: number;
    public name!: string;
    public artist!: string;
    public album!: string;
    public link!: string;
    public length!: number;
    public cover_link!: string;
    public user_playlist_id!: number;
}

export function SongFactory(sequelize:Sequelize): typeof Song {
    Song.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey:true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull:false
            },
            artist: {
                type: DataTypes.STRING,
                allowNull:false
            },
            album: {
                type: DataTypes.STRING,
            },
            link: {
                type: DataTypes.STRING,
            },
            length: {
                type: DataTypes.FLOAT,
            },
            cover_link: {
                type:DataTypes.STRING,
                
            },
            user_playlist_id: {
                type:DataTypes.NUMBER,
            }
        },
        {
			tableName: "songs",
			sequelize,
			timestamps: true,
			underscored: true,
			freezeTableName: true,
		}
    );

    return Song;
}