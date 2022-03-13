require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Connected to Database successfully!"));

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(4000, () => console.log("Server started successfully!"));