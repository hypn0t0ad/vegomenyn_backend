const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CityModel = require("./CityModel");
const CourseModel = require("./CourseModel");
const FoodtypeModel = require("./FoodtypeModel");

const RestaurantSchema = new mongoose.Schema({
    name: String,
    geolocation: String,
    phone: String,
    mail: String,
    city: {
        type: Schema.Types.ObjectId,
        ref: "CityModel"
    },
    foodTypes: [
        {
            type: Schema.Types.ObjectId,
            ref: "FoodtypeModel"
        },
    ],
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: "CourseModel"
        },
    ]
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);