const {Schema, model} = require("mongoose");

const bookSchema = Schema({
    title: String,
    author: String,
    summary: String
})

module.exports = model("book", bookSchema)