const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URL;

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected successfully");
});
