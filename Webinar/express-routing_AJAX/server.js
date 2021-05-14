const express = require('express')
const srv = express()
const todoRoute = require(__dirname+'/routes/todos')

srv.use(express.json())
srv.get('/hello', function (req,res){
    res.send("Hello")
})


srv.use('/public',express.static(__dirname + "/public"))

srv.use('/todos',todoRoute)
srv.listen(4444, () => {
    console.log('Server started on http://localhost:4444')
})