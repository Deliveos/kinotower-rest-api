import { Express } from "express"
import users from "./users";
import films from "./films";
import categories from "./categories";
import countries from "./countries";

export default (app: Express)=> {
  app.use("/api/", users);
  app.use("/api/", films);
  app.use("/api/", categories);
  app.use("/api/", countries);
}