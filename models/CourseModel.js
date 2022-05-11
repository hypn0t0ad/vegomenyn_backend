const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
});

module.exports = mongoose.model("Courses", CourseSchema);