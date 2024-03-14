const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const expenseRoute = require("./routes/expenseRoute");
const analysisRoute = require("./routes/analysisRoute");
import dotenv from "dotenv";
dotenv.config();

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
