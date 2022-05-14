const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: String,
    geolocation: String,
    phone: String,
    mail: String,
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cities" 
    },
    courses: Object
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);