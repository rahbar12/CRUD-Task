const express = require("express");
const http = require("http");
const { Server } = require("socket.io")
const cors = require("cors")
require('dotenv').config();
const connectDB = require('./src/libs/dbConnection')
// const socketConnection = require('./src/sockets')

const routesAPI = require("./src/api")

const { API_PORT, API_PREFIX } = process.env;

const app = express();
const server = http.createServer(app)
const io = new Server(server)

// socketConnection(io)

// logging
// app.use((req, res, next) => {
//     req.date = new Date()
//     next()
// })

app.use(express.json())
app.use(cors())

app.use(API_PREFIX, routesAPI)

//errors
app.use((req, res) => res.status(404).json({ status: false, message: "Route Not Found", data: [] }))
app.use((err, req, res, next) => res.status(400).json({ status: false, message: "Error In Request", data: [] }))

const status = `|    Server Started [API] - ${Date()} - [PORT:${API_PORT}]    |`
connectDB(status.length)

server.listen(API_PORT, () => {
    console.log(`${"".padStart(status.length, "-")}\n${status}`)
})