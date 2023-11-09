const { Router } = require("express")
const responseHandler = require("../../utils/responseHandler")
const validate = require('../../utils/validate')

const { get, post, getOne, updateOne, deleteOne } = require("./controllers");
const { create, update } = require('./validators')
const app = Router();

app.get("/book", responseHandler(get))
app.post("/book", validate(create), responseHandler(post))
app.get("/book/:id", responseHandler(getOne))
app.patch("/book/:id", validate(update), responseHandler(updateOne))
app.delete("/book/:id", responseHandler(deleteOne))

module.exports = app