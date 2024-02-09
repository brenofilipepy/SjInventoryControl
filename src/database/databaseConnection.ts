import { Sequelize } from "sequelize";
var path = require("path");

const sqliteConnection = new Sequelize({
    define: {
        freezeTableName: true
    },
    dialect: 'sqlite',
    storage: path.resolve('src/database/dev-database.sqlite'),
    logging: false
});

export async function syncModels() {
    await sqliteConnection.sync({ force: true });
}

try {
    const sequelizeAuthenticate = async() => {
        await sqliteConnection.authenticate();
    }
    console.info('Database connection has been established successfully');
} catch(error) {
    console.error('Unable to connect to the database:', error);
}

export default sqliteConnection;