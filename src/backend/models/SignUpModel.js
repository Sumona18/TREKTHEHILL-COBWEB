const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    fullName: String,
    username: String,
    email: String,
    password: String
})

module.exports = new mongoose.model("User", userSchema);