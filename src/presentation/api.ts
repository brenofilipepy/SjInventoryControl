import express, { Express, Request, Response } from "express";
import Logger from "../business/logger";
import User from "../business/controllers/user.controller";
import Product from "../business/controllers/product.controller";
import Client from "../business/controllers/client.controller";
const cors = require('cors');

abstract class Api {
    protected app: Express;
    protected logger = Logger.getLogger();
    protected abstract controller: User | Product | Client;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors());
        this.setupRoutes();
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    }

    protected abstract setupRoutes(): void;
}

export default Api;