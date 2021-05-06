let socket = io()

$('#loginBox').show()
$('#chatBox').hide()
console.log($('#btnStart'))
$('#btnStart').click(() => {
    console.log('clicked')
    socket.emit('login',{
    username : $('#inpUsername').val(),
    password : $('#inpPassword').val()
    })
})


socket.on('logged_in',() => {
    $('#loginBox').hide()
    $('#chatBox').show()
})

socket.on('login_failed', () => {
    window.alert('username or password wrong!')
})

$('btnSendMsg').click(() => {
    socket.emit('msg_send', {
        to : $('#inpToUser').val(),
        msg: $('#inpNewMsg').val()
    })
})

socket.on('msg_rcvd', (data) => {
    $('#ulMsgList').append($('<li>').text(
        `[${data.from}] :${data.msg}`
    ))
})