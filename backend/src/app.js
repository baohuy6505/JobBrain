const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;