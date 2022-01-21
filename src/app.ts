import express from "express";
import dotenv from "dotenv";
import http from "http";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";

import router from "./router";

const app = express();
const server = http.createServer(app);

dotenv.config();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Database
mongoose.connect(process.env.DATABASE as string);

app.use(router);

server.listen(3000, () => console.log("Server started"));
