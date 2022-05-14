const mongoose = require("mongoose");
const RestaurantModel = require("./RestaurantModel");

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const CitySchema = new mongoose.Schema({
    name: String,
})

module.exports = mongoose.model("Cities", CitySchema);