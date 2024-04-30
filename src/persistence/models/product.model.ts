import { DataTypes, Model } from 'sequelize';
import sqliteConnection from '../../database/db.ts';

class ProductModel extends Model {};

ProductModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    addDate: {
        type: DataTypes.DATE
    },
    updateDate: {
        type: DataTypes.DATE
    },
    supplier: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    measure: {
        type: DataTypes.STRING
    },
    eanCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            max: 11
        }
    },
    skuCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    sendDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    deliverydate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, 
{
    sequelize: sqliteConnection,
    modelName: 'Product',
    tableName: 'product',
});
  
export default ProductModel;