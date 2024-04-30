import { Express, Request, Response } from "express";
import User from "../business/controllers/user";
import Logger from "../business/logger.ts";
import database from "../database/db.ts";
import IHttpResponse from "../interfaces/IHttpResponse.ts";

const express = require("express");
const app: Express = express();
const port = 4000;
const logger = Logger.getLogger();

/**
 * TODO: Check the possibility to split this API into multiple services
 */
app.use(express.json());

(async () => {
  try {
    await database.sync();
    logger.info('Database is successfully synchronized')
  } catch (error) {
    logger.error(error);
  }
})();

app.get('/', (req: Request, res: Response) => {
  res.send('There are no easter eggs up here go away!');
});

app.post('/user', async (req: Request, res: Response) => {
  const user = new User();
  const response: IHttpResponse = await user.create(req.body);
  res.status(response.status).json(response);
})

app.get('/user', async (req: Request, res: Response) => {
  const user = new User();
  const response: IHttpResponse = await user.getAll();
  res.status(response.status).json(response);
})

app.get('/user/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = new User();
  const response: IHttpResponse = await user.getById(id);
  res.status(response.status).json(response);
})

app.patch('/user', (req: Request, res: Response) => {

})

app.delete('/user/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = new User();
  const response: IHttpResponse = await user.delete(id);
  res.status(response.status).json(response);
})

app.listen(port, () => {
  logger.info(`Server is running on port 4000`)
});
