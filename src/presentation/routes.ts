import { Express, Request, Response } from "express";

const express = require("express");
const app: Express = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World with TypeScript and Express!');
});

app.listen(port, () => {
  console.info(`Server is running on port 4000`);
});
