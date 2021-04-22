import express, { NextFunction, Request, Response } from "express";
import sesion from "express-session";
import config from "./config";
import mountRoutes from "./routes";
import logger from "./logger";



const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(sesion({
  name: config.SESSION_NAME,
  resave: false, 
  rolling: true,
  saveUninitialized: false,
  secret: config.SESSION_SECRET,
  cookie: {
    httpOnly: true,
    maxAge: 10 * 1000 * 60, // 10 min
    secure: config.NODE_ENV === "production" ? true : false
  }
}));

// Logger
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.debug({
    method: req.method, 
    date: new Date().toDateString(), 
    payload: req.body});
  next();
});
mountRoutes(app);

app.listen(config.PORT, ()=> {
  console.log(`Server listen at ${config.BASE_URL}:${config.PORT}`);
})