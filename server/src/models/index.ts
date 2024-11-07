import sequelize from "../database";
import { UserFactory } from './User.js';

const User = UserFactory(sequelize);

export { sequelize, User };
