const express = require('express')
const todoRoute = require('./routes/todos')
const srv = express()

srv.set('view engine', 'hbs')
srv.set('views',  'views')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))


srv.use('/todos',todoRoute)

srv.listen(4545, () => {
    console.log('server started on http://localhost:4545')
})