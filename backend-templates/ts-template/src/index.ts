import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { RouteLoader } from "z-file-router";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// file based routing
new RouteLoader({ app, port: 3000 });
