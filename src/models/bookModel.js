const {Schema, model} = require("mongoose");

const userSchema = Schema({
    title: String,
    author: String,
    summary: String
})

module.exports = model("user", userSchema)