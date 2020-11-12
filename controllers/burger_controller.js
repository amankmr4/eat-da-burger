var express = require("express");

var router = express.Router();

//importing the model(burger.js) to use its database functions within the routes below
var burger = require("../models/burger.js")


router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log(data)
    })
})