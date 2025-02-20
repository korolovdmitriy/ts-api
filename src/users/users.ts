import express, { Request, Response } from "express";

const userRouter = express.Router();

userRouter.post("/login", (req: Request, res: Response) => {
  res.send("login");
});

userRouter.post("/registered", (req: Request, res: Response) => {
  res.send("registered");
});

export { userRouter };
