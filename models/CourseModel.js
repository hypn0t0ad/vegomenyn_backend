const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: false },
    price: { type: Number, required: true },  
    description: { type: String, required: false, maxlength: 500 },
    foodtypes: [{ type: Schema.Types.ObjectId, ref: 'Foodtypes' }],
    dateUpdated: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Courses", CourseSchema);