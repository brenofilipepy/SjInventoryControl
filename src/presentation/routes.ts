import { Express, Request, Response } from "express";
import User from "../business/controllers/user";
import Logger from "../business/logger.ts";
import database from "../database/db.ts";
import IHttpResponse from "../interfaces/IHttpResponse.ts";

const express = require("express");
const app: Express = express();
const port = 4000;
const logger = Logger.getLogger();

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
  res.send('Hello World with TypeScript and Express!');
});

app.post('/registerUser', (req: Request, res: Response) => {
  const user = new User();
  const response: IHttpResponse = user.create(req.body);
  res.status(response.status).json(response);
})

app.listen(port, () => {
  logger.info(`Server is running on port 4000`)
});
