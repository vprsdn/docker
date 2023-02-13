const express = require("express");
const mongoose = require("mongoose");

const app = express();

const DB = "mongodb://mymongo:27017/dockerTesting";

mongoose
    .connect(DB, {})
    .then((res) => {
        console.log("DB Connected");
    })
    .catch((error) => {
        console.log("DB Connection failed.", error);
    });

app.get("/", (req, res) => {
    res.json({
        message: "Response from home route",
    });
});

app.listen(4003, () => {
    console.log("Server running at 4003");
});
