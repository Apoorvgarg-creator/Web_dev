let socket = io()
// console.log(socket.id)
console.log('socket script1:',socket)
let boomBtn = document.getElementById('boom')

// client to server
boomBtn.onclick = function () {

    socket.emit('boom')
}

// server to client
socket.on('whizz',() => {
    let div = document.createElement('div')
    div.innerText = 'whizz'
    document.body.appendChild(div)
})


