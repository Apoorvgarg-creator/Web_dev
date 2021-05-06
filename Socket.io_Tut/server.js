const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')

// created a server out of a express app
const server = http.createServer(app)
const io = socketio(server)

io.on('connection',(socket) => {
    console.log('connected with socket id =',socket.id)

    socket.on('boom', () => {
        console.log('boom received from ',socket.id)
    })

    socket.on('msg_send_new',(data) => {
        console.log(data)
    })

    setInterval(() =>{
        socket.emit('whizzz')
    },2000);
})

app.use('/',express.static(__dirname +'/public' ))


server.listen(3344, ()=> {
    console.log('Server started on http://localhost:3344')
})


// http://localhost:3344/socket.io/socket.io.js // shows setup is correctly done !
// even though we haven't created any method but still the above url_path works



// socket.on('msg_send', (data) => {
//     io.emit('msg_rcvd', data)  // changes occur in all tabs  ( io refers to server )
//     // socket.emit('msg_rcvd', data)  // changes in the particular tab (as socket refers to particular tab)
//     // socket.broadcast.emit('msg_rcvd',data)
//
// })