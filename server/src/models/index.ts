import sequelize from "../database.js";
import { UserFactory } from './User.js';

const User = UserFactory(sequelize);

export { sequelize, User };
