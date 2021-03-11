import express from "express";
import config from "./config";
import mountRoutes from "./routes";

const app = express();

// Middleware
app.use(express.json())
mountRoutes(app);


app.listen(config.PORT, ()=> {
  console.log(`Server listen at ${config.BASE_URL}:${config.PORT}`);
})