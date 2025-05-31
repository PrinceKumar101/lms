import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

import { db } from "./config/db_config";
import user_route from "./routes/user_route";

db();
app.use("/api-v1", user_route);
const port = process.env.Port || 3000;
app.listen(port, () => {
  console.log("Server running at port " + port);
});
