import express, { urlencoded } from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { db } from "./config/db_config";
import user_route from "./routes/user_route";
import admin_route from "./routes/admin_route";

db();
app.use("/api-v1", user_route);
app.use("/api-v1/admin", admin_route);


const port = process.env.Port || 3000;
app.listen(port, () => {
  console.log("Server running at port " + port);
});
