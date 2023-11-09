const jwt = require("jsonwebtoken")

module.exports = (io) => {
    io.use((socket, next) => {
        if (socket.handshake.headers.auth) {
            try {
                const { _id } = jwt.verify(socket.handshake.headers.auth, process.env.SECRET)
                socket.userId = _id;
                next()
            } catch (error) {
                socket.emit("disconnect");
            }
        }
        else socket.emit("disconnect");
    })

    io.on("connection", (socket) => {
        // socket.on("join-room", require("./joinRoom")(io, socket))
    })
}