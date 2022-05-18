const mongoose = require("mongoose");

const FoodtypeSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 100 },
    dateUpdated: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Foodtypes", FoodtypeSchema);