import UserApi from "./presentation/user.api.ts";
import ProductApi from "./presentation/product.api.ts";
import ClientApi from "./presentation/client.api.ts";
import database from "./database/db.ts";
import Logger from "./business/logger.ts";

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
    const userApi = new UserApi();
    const productApi = new ProductApi();
    const clientApi = new ClientApi();

    userApi.start(4000);
    productApi.start(4001);
    clientApi.start(4002);
}

main();