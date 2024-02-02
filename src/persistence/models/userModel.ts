import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const UserModel = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});

export default UserModel;