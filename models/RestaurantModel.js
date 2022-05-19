const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    geolocation: { type: String, required: true },
    phone: { type: String, required: true },
    mail: { type: String, required: true },
    dateUpdated: { type: Date, default: Date.now() },
    city: { type: Schema.Types.ObjectId, ref: "Cities" },
    courses: { id: [{ type: Schema.Types.ObjectId, ref: 'Courses', required: false }] }
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);