
module.exports = (io, socket) => async (data) => {
    try {

    } catch (error) {
        socket.emit("reconnect")
    }
}