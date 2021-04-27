import { NextFunction, Request, Response } from "express"
import { encrypt } from "../services/encrypt";

export const encryption = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.email) {
    req.body.email = encrypt(req.body.email);
  }
  if (req.body.password) {
    req.body.password = encrypt(req.body.password);
  }
  next();
}