const mongoose = require("mongoose");

//Load environment variables
const dotenv = require("dotenv");
dotenv.config();

// Connect to MongDB
module.exports.connect = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB started");
    })
    .catch((error) => console.log("Error connecting to MongDB", error));
};