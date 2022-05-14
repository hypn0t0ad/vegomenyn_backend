const mongoose = require("mongoose");

const FoodtypeSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("Foodtypes", FoodtypeSchema);