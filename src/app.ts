// src/index.ts

import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import { errror_handler } from "./middleware/error_handler";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello, Welcome to Grocery Bokking Backend Server!");
});
app.use("/api", require("./modules"));
app.use(errror_handler);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
