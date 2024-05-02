import express, { Express, Request, Response } from "express";
import User from "../business/controllers/user";
import Logger from "../business/logger.ts";
import database from "../database/db.ts";
import IHttpResponse from "../interfaces/IHttpResponse.ts";



/**
 * TODO: Check the possibility to split this API into multiple services
 * TODO: Check the possibility to create a generic function for each route
 */
class SjApi {
  private app: Express;
  private logger = Logger.getLogger();

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.syncDatabase();
    this.setupRoutes();
  }
  
  private syncDatabase(): void {
    (async () => {
      try {
        await database.sync();
        this.logger.info('Database is successfully synchronized')
      } catch (error) {
        this.logger.error(error);
      }
    })();
  }

  private setupRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('There are no easter eggs up here go away!');
    });
    
    // NOTE: USER ENDPOINTS
    this.app.post('/user', async (req: Request, res: Response) => {
      const user = new User();
      const response: IHttpResponse = await user.create(req.body);
      res.status(response.status).json(response);
    })
    
    this.app.get('/user', async (req: Request, res: Response) => {
      const user = new User();
      const response: IHttpResponse = await user.getAll();
      res.status(response.status).json(response);
    })
    
    this.app.get('/user/:id', async (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      const user = new User();
      const response: IHttpResponse = await user.getById(id);
      res.status(response.status).json(response);
    })
    
    this.app.patch('/user/:id', async (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      const user = new User();
      const response: IHttpResponse = await user.update(id, req.body);
      res.status(response.status).json(response);
    })
    
    this.app.delete('/user/:id', async (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      const user = new User();
      const response: IHttpResponse = await user.delete(id);
      res.status(response.status).json(response);
    })
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })
  }
}

const sjApi = new SjApi();
sjApi.start(4000);
