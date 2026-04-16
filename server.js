import express from "express";
import dotenv from "dotenv";
import pool from "./src/config/dbConnection.js";
import { errorHandling, notFoundHandler } from "./src/middleware/errorHandling.js";
import logger from "./src/middleware/logger.js";
import apiRoute from "./src/routes/index.js";
import cors from "cors";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: "http://localhost:5173"
}));

pool.connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use("/api", apiRoute);

app.use(notFoundHandler);
app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

// docker run -d --name postgres-container -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mydb -p 5432:5432 postgres

// docker exec -it postgres-container psql -U admin -d mydb
