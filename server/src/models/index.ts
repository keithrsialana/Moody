import sequelize from "../database.js";
import { UserFactory } from './User.js';
import { SongFactory } from "./Song.js";
import { PlaylistFactory } from "./Playlist.js";

const User = UserFactory(sequelize);
const Song = SongFactory(sequelize);
const Playlist = PlaylistFactory(sequelize);

export { sequelize, User, Song, Playlist };
