import { DataTypes, Model } from 'sequelize';
import sqliteConnection from '../../database/databaseConnection.ts';

class UserModel extends Model {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  permissions: string[];
  addDate: string;
  updateDate: string;
  status: string;
  activityLog: string[];
};

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
    type: DataTypes.ARRAY(DataTypes.STRING)
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
    type: DataTypes.ARRAY(DataTypes.STRING)
  }
},
{
  sequelize: sqliteConnection,
  modelName: 'Product'
});

export default UserModel;