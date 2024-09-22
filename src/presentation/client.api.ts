import Api from "./api.ts";
import IHttpResponse from "../interfaces/IHttpResponse.ts";
import Client from "../business/controllers/client.controller.ts";
import { Request, Response } from "express";

class ClientApi extends Api {
    protected controller = new Client();
    constructor() {
        super();
    }

    protected setupRoutes(): void {
        this.app.post('/client', async (req: Request, res: Response) => {
            const response: IHttpResponse = await this.controller.create(req.body);
            res.status(response.status).json(response);
        })

        this.app.get('/client', async (req: Request, res: Response) => {
            const response: IHttpResponse = await this.controller.getAll();
            res.status(response.status).json(response);
        })

        this.app.get('/client/:id', async (req: Request, res: Response) => {
            const id = parseInt(req.params.id);
            const response: IHttpResponse = await this.controller.getById(id);
            res.status(response.status).json(response);
        })

        this.app.patch('/client/:id', async (req: Request, res: Response) => {
            const id = parseInt(req.params.id);
            const response: IHttpResponse = await this.controller.update(id, req.body);
            res.status(response.status).json(response);
        })

        this.app.delete('/client/:id', async (req: Request, res: Response) => {
            const id = parseInt(req.params.id);
            const response: IHttpResponse = await this.controller.delete(id);
            res.status(response.status).json(response);
        })
    }
}

export default ClientApi;