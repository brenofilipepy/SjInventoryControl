import UserApi from "./userApi";
import ProductApi from "./productApi";
import database from "../database/db.ts";
import Logger from "../business/logger.ts";

const logger = Logger.getLogger();

function syncDatabase() {
    (async () => {
        try {
            await database.sync();
            logger.info('Database is successfully synchronized')
        } catch (error) {
            console.error(error);
            logger.error(error);
        }
    })();
}

function main() {
    syncDatabase();
    const userApi = new UserApi;
    const productApi = new ProductApi;

    userApi.start(4000);
    productApi.start(4001);
}

main();