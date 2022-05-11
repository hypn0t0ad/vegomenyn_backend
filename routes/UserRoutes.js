const express = require("express");
const router = express.Router();

// Import model
const userDB = require("../models/UserModel");

//Add a user
//POST /api/users - ADD USER
router.post("/", async (req, res) => {
    try {
        // Save user to DB
        await userDB
        .create({
            id: req.body.id,
            nickname: req.body.nickname,
            mail: req.body.mail,
            password: req.body.password,
            admin: req.body.admin,
        })
        .then(() => {
            res.status(201).send({
                status: true,
                message: "User added successfully",
            });
        })
        .catch(() => {
            res.status(400).send({
                status: "false",
                message: "user could not be added"
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while adding user",
        });
    }
});

//Get all users
//GET /api/users - GET ALL USERS
router.get("/", async (req, res) => {
    try {
        await userDB
        .find()
        .exec()
        .then((doc) => {
            res.status(200).send(doc);
        })
        .catch((error) => {
            res.status(500).send({
                status: false,
                message: "Unable to get all users",
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while getting users"
        });
    }
});

//Get specific user
//GET /api/user - GET USER
router.get("/byid", async (req, res) => {
    try {
        await userDB
        .findOne({
            id: req.body.id,
        })
        .exec()
        .then((doc) => {
            res.status(200).send(doc);
        })
        .catch((error) => {
            res.status(500).send({
                status: false,
                message: "Unable to get user",
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while getting users"
        });
    }
});

module.exports = router;