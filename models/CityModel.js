const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
    name: String,
})

module.exports = mongoose.model("Cities", CitySchema);