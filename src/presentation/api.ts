import express, { Express, Request, Response } from "express";
import Logger from "../business/logger";
import User from "../business/controllers/user";
import Product from "../business/controllers/product";

abstract class Api {
    protected app: Express;
    protected logger = Logger.getLogger();
    protected abstract controller: User | Product;

    constructor() {
        this.app = express();
        this.app.use(express.json());
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