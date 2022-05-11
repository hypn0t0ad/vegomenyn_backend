const express = require("express");
const router = express.Router();

// Import model
const restaurantDB = require("../models/RestaurantModel");

//Add a user
//POST /api/users - ADD RESTAURANT
router.post("/", async (req, res) => {
    try {
        // Save restaurant to DB
        await restaurantDB
        .create({
            id: req.body.id,
            name: req.body.name,
            foodstyle: req.body.foodstyle,
            courses: req.body.courses,
            contact: req.body.contact,
        })
        .then(() => {
            res.status(201).send({
                status: true,
                message: "Restaurant added successfully",
            });
        })
        .catch(() => {
            res.status(400).send({
                status: "false",
                message: "Restaurant could not be added"
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while adding restaurant",
        });
    }
});


//Get all restaurants
//GET /api/users - GET ALL RESTAURANTS
router.get("/", async (req, res) => {
    try {
        await restaurantDB
        .find()
        .exec()
        .then((doc) => {
            res.status(200).send(doc);
        })
        .catch((error) => {
            res.status(500).send({
                status: false,
                message: "Unable to get all restaurants",
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while getting restaurants"
        });
    }
});

module.exports = router;