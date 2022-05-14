const express = require("express");
const router = express.Router();

// Import model
const cityDB = require("../models/CityModel");

//Add a city
//POST /api/cities - ADD CITY
router.post("/", async (req, res) => {
    try {
        // Save city to DB
        await cityDB
        .create({
            name: req.body.name,
        })
        .then(() => {
            res.status(201).send({
                status: true,
                message: "City added successfully",
            });
        })
        .catch(() => {
            res.status(400).send({
                status: "false",
                message: "City could not be added"
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while adding city",
        });
    }
});

//Get all cities
//GET /api/city - GET ALL CITIES
router.get("/", async (req, res) => {
    try {
        await cityDB
        .find()
        .exec()
        .then((doc) => {
            res.status(200).send(doc);
        })
        .catch((error) => {
            res.status(500).send({
                status: false,
                message: "Unable to get all cities",
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while getting cities"
        });
    }
});

module.exports = router;