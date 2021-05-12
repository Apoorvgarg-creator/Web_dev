const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Hello world!')
})
// function that are triggered by request and we can send response through these as well
function middleware1 (req, res, next) {
    console.log(req.url)

    // res.send('middleware1 function called')

    next() // if next() not called then server will hang
}
function middleware2 (req, res, next) {
    console.log(req.hostname)

    res.send('middleware2 function called')

    //next()  //Error
}


app.get('/x', middleware1, middleware2)
app.listen(3333, () => {
    console.log('server started on http://localhost:3333')
})