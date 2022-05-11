const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: Number,
    nickname: String,
    mail: String,
    password: String,
    admin: Boolean
});

module.exports = mongoose.model("Users", UserSchema);