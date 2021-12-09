var express = require("express");
var app = express();

app.get("/", (res, req) => {
    res.sendFile("índex.html");
});