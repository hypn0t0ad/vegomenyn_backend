const express = require("express");
const router = express.Router();

// Import model
const courseDB = require("../models/CourseModel");

//Add a course
//POST /api/users - ADD COURSE
router.post("/", async (req, res) => {
    try {
        // Save course to DB
        await courseDB
        .create({
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description,
            foodtypes: req.body.foodtypes
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

//Get all course
//GET /api/city - GET ALL courses
router.get("/", async (req, res) => {
    try {
        await courseDB
        .find()
        .exec()
        .then((doc) => {
            res.status(200).send(doc);
        })
        .catch((error) => {
            res.status(500).send({
                status: false,
                message: "Unable to get all courses",
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while getting courses"
        });
    }
});

module.exports = router;