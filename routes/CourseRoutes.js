const express = require("express");
const router = express.Router();

// Import model
const courseDB = require("../models/CourseModel");

//Add a user
//POST /api/users - ADD COURSE
router.post("/", async (req, res) => {
    try {
        // Save course to DB
        await courseDB
        .create({
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
        })
        .then(() => {
            res.status(201).send({
                status: true,
                message: "Course added successfully",
            });
        })
        .catch(() => {
            res.status(400).send({
                status: "false",
                message: "Course could not be added"
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while adding course",
        });
    }
});

module.exports = router;