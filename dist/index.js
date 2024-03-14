"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const expenseRoute = require("./routes/expenseRoute");
const analysisRoute = require("./routes/analysisRoute");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const app = express();
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use("/expense", expenseRoute);
app.use("/analysis", analysisRoute);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
