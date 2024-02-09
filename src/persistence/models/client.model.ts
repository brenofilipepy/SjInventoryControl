import { DataTypes, Model } from 'sequelize';
import sqliteConnection from '../../database/databaseConnection.ts';

class ClientModel extends Model {};

ClientModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
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
    },
    email: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    addDate: {
        type: DataTypes.STRING,
    },
    updateDate: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    activityLog: {
        type: DataTypes.STRING, // TODO: Ideally activityLog should be an array
    }
},
{
    sequelize: sqliteConnection,
    modelName: 'Client',
    tableName: 'Client',
});

export default ClientModel;