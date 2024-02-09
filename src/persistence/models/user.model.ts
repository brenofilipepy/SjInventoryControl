import { DataTypes, Model } from 'sequelize';
import sqliteConnection from '../../database/databaseConnection.ts';

class UserModel extends Model {};

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
  },
  permissions: {
    type: DataTypes.STRING, // TODO: Ideally permissions should be a domain table
  },
  addDate: {
    type: DataTypes.DATE
  },
  updateDate: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.STRING
  },
  activityLog: {
    type: DataTypes.STRING // TODO: Ideally activityLog should be an array
  }
},
{
  sequelize: sqliteConnection,
  modelName: 'Product',
  tableName: 'Product'
});

export default UserModel;