import { DataTypes, Model } from 'sequelize';
import Sequelize from 'sequelize';
import sqliteConnection from '../../database/db';

class ClientModel extends Model {};

ClientModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING, // TODO: Ideally address should be a domain table
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    addDate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    updateDate: {
        type: DataTypes.STRING,
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
    tableName: 'user',
});

module.exports = ClientModel;