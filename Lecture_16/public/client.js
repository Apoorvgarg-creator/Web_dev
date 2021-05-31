let socket = io()
// connected is the event listener
socket.on('connect', () => {
    document.getElementById('socketId').textContent = socket.id
})

function colorTheBox (color) {
    document.querySelector('.'+color).style.backgroundColor = color
    setTimeout(() => {
    document.querySelector('.'+color).style.backgroundColor = null

    },2000)
}

let btn = document.getElementById('colorIt');

btn.onclick = function () {
    const color = document.getElementById('selectedColor').value
    socket.emit('colorit',{color})
}

socket.on('colorTheBox', (data) => {
    colorTheBox(data.color)
})