import { Sequelize } from "sequelize";

const sqliteConnection = new Sequelize({
    define: {
        freezeTableName: true
    },
    dialect: 'sqlite',
    storage: './dev-database.sqlite'
});

try {
    const sequelizeAuthenticate = async() => {
        await sqliteConnection.authenticate();
    }
    console.info('Database connection has been established successfully');
} catch(error) {
    console.error('Unable to connect to the database:', error);
}

export default sqliteConnection;