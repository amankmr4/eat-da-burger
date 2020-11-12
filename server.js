var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});