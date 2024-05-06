import Api from "./api"
import IHttpResponse from "../interfaces/IHttpResponse.ts";
import User from "../business/controllers/user";
import { Request, Response } from "express";

class UserApi extends Api {
    protected controller = new User();
    constructor() {
        super();
    }

    protected setupRoutes(): void {
        this.app.post('/user', async (req: Request, res: Response) => {
            const response: IHttpResponse = await this.controller.create(req.body);
            res.status(response.status).json(response);
        })

        this.app.get('/user', async (req: Request, res: Response) => {
            const response: IHttpResponse = await this.controller.getAll();
            res.status(response.status).json(response);
        })

        this.app.get('/user/:id', async (req: Request, res: Response) => {
            const id = parseInt(req.params.id);
            const response: IHttpResponse = await this.controller.getById(id);
            res.status(response.status).json(response);
        })

        this.app.patch('/user/:id', async (req: Request, res: Response) => {
            const id = parseInt(req.params.id);
            const response: IHttpResponse = await this.controller.update(id, req.body);
            res.status(response.status).json(response);
        })

        this.app.delete('/user/:id', async (req: Request, res: Response) => {
            const id = parseInt(req.params.id);
            const response: IHttpResponse = await this.controller.delete(id);
            res.status(response.status).json(response);
        })
    };
}

export default UserApi;