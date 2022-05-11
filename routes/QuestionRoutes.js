const express = require("express");
const router = express.Router();

// Import model
const questionDB = require("../models/QuestionModel");

//Add a question
//POST /api/questions - ADD QUESTION
router.post("/", async (req, res) => {
    try {
        // Save question to DB
        await questionDB
        .create({
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            user: req.body.user,
        })
        .then(() => {
            res.status(201).send({
                status: true,
                message: "Question added successfully",
            });
        })
        .catch(() => {
            res.status(400).send({
                status: "false",
                message: "Question could not be added"
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while adding question",
        });
    }
});


//Get all questions with their answers
//GET /api/questions - GET ALL QUESTION
router.get("/", async (req, res) => {
    try {

        //Perform a MongoDB 'join' query to fetch all answers for questions
        //based on the questionId field
        await questionDB
        .aggregate([
            {
                $lookup: {
                    from: "answers",
                    localField: "_id",
                    foreignField: questionId,
                    as: "allAnswers",
                },
            },
        ])
        .exec()
        .then((doc) => {
            res.status(200).send(doc);
        })
        .catch((error) => {
            res.status(500).send({
                status: false,
                message: "Unable to get to the questions",
            });
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Server error while getting questions"
        });
    }
});

module.exports = router;