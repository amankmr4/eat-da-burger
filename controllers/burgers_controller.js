const express = require("express");
const router = express.Router();
const burgers = require("../models/burger");



// Get Route - Receive all burgers from database
router.get("/", (req, res) => {

    // returns all burgers from database to index.handlebars
    burgers.selectAll((data) => {
        res.render("index", { burgers: data });
    });
});

// Post Route - Add new burger to the database
router.post("/api/burger", (req, res) => {

    // Inserts burger to db
    burgers.insertOne(["burger_name", "devoured"],
        [req.body.burger_name, false],
        function (result) {
            res.json({ id: result.insertId });
        }
    )
});

// Put Route - Updates hamburger to devoured
router.put("/api/burger/:id", (req, res) => {

    var condition = "id = " + req.params.id;

    // Update hamburger in db
    burgers.updateOne({
        devoured: true
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
            res.redirect("/");
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;