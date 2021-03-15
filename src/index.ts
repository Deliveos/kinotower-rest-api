import express, { NextFunction, Request, Response } from "express";
import config from "./config";
import mountRoutes from "./routes";
import logger from "./logger";



const app = express();

// Middleware
app.use(express.json());
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