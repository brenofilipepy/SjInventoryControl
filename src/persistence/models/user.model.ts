import { DataTypes, Model } from 'sequelize';
import sqliteConnection from '../../database/db.ts';

class UserModel extends Model {};

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permissions: {
    type: DataTypes.STRING, // TODO: Ideally permissions should be a domain table
    allowNull: false,
  },
  addDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updateDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activityLog: {
    type: DataTypes.STRING, // TODO: Ideally activityLog should be an array
    allowNull: false,
  }
},
{
  sequelize: sqliteConnection,
  modelName: 'User',
  tableName: 'user'
});

export default UserModel;