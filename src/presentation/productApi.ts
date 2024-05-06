import Api from "./api"
import IHttpResponse from "../interfaces/IHttpResponse.ts";
import Product from "../business/controllers/product.ts";
import { Request, Response } from "express";

class ProductApi extends Api {
    protected controller = new Product();
    constructor() {
        super();
    }

    protected setupRoutes(): void {
        this.app.post('/product', async (req: Request, res: Response) => {
            const response: IHttpResponse = await this.controller.create(req.body);
            res.status(response.status).json(response);
        })

        this.app.get('/product', async (req: Request, res: Response) => {
            const response: IHttpResponse = await this.controller.getAll();
            res.status(response.status).json(response);
        })
    };
}

export default ProductApi;