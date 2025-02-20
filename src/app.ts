import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from "http";

export class App {
  app: Express;
  server: Server;
  port: number;

  constructor() {
    this.app = express();
    this.port = 8000;
  }

  public useRouters() {
    this.app.use("/users", userRouter);
  }

  public async init() {
    this.useRouters();
    this.server = this.app.listen(this.port);
    console.log(`Server running on http://localhost:${this.port}`);
  }
}
