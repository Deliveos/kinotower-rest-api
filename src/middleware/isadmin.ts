import { NextFunction, Request, Response } from "express"

export const onlyAdmin = (req: Request, res: Response, next: NextFunction) => {
  if(req.session.role !== "admin") {
    return res.status(401).redirect("/");
  }
  next();
}