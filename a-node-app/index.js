const express = require("express");

console.log("hello from a node app");
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Response from backend",
    });
});

app.listen(3003, () => {
    console.log("Server running at 3003");
});
