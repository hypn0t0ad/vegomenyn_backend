const express = require("express");
const router = express.Router();

// Import model
const foodtypeDB = require("../models/FoodtypeModel");

//Add a foodtype
//POST /api/users - ADD FOODTYPE
router.post("/", async (req, res) => {
    try {
        // Save foodtype to DB
        await foodtypeDB
        .create({
            name: req.body.name,
            origin: req.body.origin
        })
        .then(() => {
            res.status(201).send({
                status: true,
                message: "Foodtype added successfully",
            });
        })
        .catch(() => {
            res.status(400).send({
                status: "false",
                message: "Foodtype could not be added"
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while adding foodtype",
        });
    }
});

//Get all foodtypes
//GET /api/city - GET ALL FOODTYPES
router.get("/", async (req, res) => {
    try {
        await foodtypeDB
        .find()
        .exec()
        .then((doc) => {
            res.status(200).send(doc);
        })
        .catch((error) => {
            res.status(500).send({
                status: false,
                message: "Unable to get all foodtypes",
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while getting foodtypes"
        });
    }
});

module.exports = router;