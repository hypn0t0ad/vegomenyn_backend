const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: Image, required: false },
    price: { type: Number, required: true },  
    description: { type: String, required: false, maxlength: 500 },
    dateUpdated: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Courses", CourseSchema);