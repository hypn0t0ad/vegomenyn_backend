const mongoose = require("mongoose"),
Schema = mongoose.Schema

const CityModel = require("./CityModel");
const CourseModel = require("./CourseModel");
const FoodtypeModel = require("./FoodtypeModel");

const RestaurantSchema = new mongoose.Schema({
    name: String,
    geolocation: String,
    city: {
        type: Schema.Types.ObjectId,
        ref: 'CityModel',
    },
    foodType: [
        {
            type: Schema.Types.ObjectId,
            ref: 'FoodtypeModel',
        },
    ],
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CourseModel'
        },
    ],
    contact: {
        city: Boolean,
        phone: String,
        mail: String,
        location: String,
    },
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);