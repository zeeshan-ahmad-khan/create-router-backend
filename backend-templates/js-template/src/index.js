const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { RouteLoader } = require("z-file-router");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// file based routing
new RouteLoader({ app, port: 3000 });
