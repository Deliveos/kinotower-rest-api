import { NextFunction, Request, Response } from "express"

export const redirectToLogin = (req: Request, res: Response, next: NextFunction) => {
  if(!req.session.userId) {
    res.redirect("/api/users/login")
  } else {
    next();
  }
}

export const redirectToHome = (req: Request, res: Response, next: NextFunction) => {
  if(req.session.userId) {
    res.redirect("/")
  } else {
    next();
  }
}

// exports.redirectToHome = redirectToHome;
// exports.redirectToLogin = redirectToLogin;