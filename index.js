const express = require("express");
const shortenerRoute = require("./routes/url");
const shortRoute = require("./routes/shortId");
const connectDB = require("./connect");
const path = require("path");
require("dotenv").config();

const app = express();

connectDB(process.env.MONGO_URI);
app.use(express.json());
app.use(express.static(path.join(__dirname + "/frontend")));
app.use("/url", shortenerRoute);
app.use("/", shortRoute);

app.listen(8080, console.log("on port:8080"));
