import { DataTypes, Model } from 'sequelize';
import sqliteConnection from '../../database/databaseConnection.ts';

class ProductModel extends Model {
    id: number;
    name: string;
    code: string;
    category: string;
    quantity: string;
    price: number;
    cost: number;
    addDate: string;
    updateDate: string;
    supplier: string;
    description: string;
    measure: string;
};

ProductModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    code: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.NUMBER
    },
    price: {
        type: DataTypes.FLOAT
    },
    cost: {
        type: DataTypes.FLOAT
    },
    addDate: {
        type: DataTypes.DATE
    },
    updateDate: {
        type: DataTypes.DATE
    },
    supplier: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    measure: {
        type: DataTypes.STRING
    }
}, 
{
    sequelize: sqliteConnection,
    modelName: 'Product'
});
  
export default ProductModel;