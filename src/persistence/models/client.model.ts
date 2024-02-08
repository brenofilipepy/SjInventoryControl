import { DataTypes, Model } from 'sequelize';
import sqliteConnection from '../../database/databaseConnection.ts';

class ClientModel extends Model {
    id: number;
    name: string;
    type: string;
    cpf: string;
    cnpj: string;
    address: string[];
    email: string;
    phone: string;
    addDate: string;
    updateDate: string;
    status: string;
    activityLog: string[];
};

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
    },
    cnpj: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    email: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    addDate: {
        type: DataTypes.DATE,
    },
    updateDate: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.STRING,
    },
    activityLog: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
},
{
    sequelize: sqliteConnection,
    modelName: 'Client'
});
  
export default ClientModel;