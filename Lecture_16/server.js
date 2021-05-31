const { Socket } = require('dgram')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use('/',express.static(__dirname + '/public'))
io.on('connection', (socket) => {
    console.log('connection id:',socket.id)

    socket.on('colorit', (data) => {
        console.log('color event reached:',data)
        io.emit('colorTheBox',(data))
    })
})

server.listen(3434, () => {
    console.log("Server started on http://localhost:3434")
})