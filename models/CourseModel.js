const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String
});

module.exports = mongoose.model("Courses", CourseSchema);