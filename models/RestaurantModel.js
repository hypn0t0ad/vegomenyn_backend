const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    id: Number,
    name: String,
    foodStyle: [
        {
            type: String,
        },
    ],
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Courses",
        },
    ],
    contact: {
        city: Boolean,
        phone: String,
        mail: String,
        location: String
    }
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);