const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
    name: { type: String, equired: true, maxlength: 100 },
    dateUpdated: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("Cities", CitySchema);