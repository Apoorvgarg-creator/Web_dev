const express = require('express')
const app = express();
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api').route)
app.listen('3333', () => {
    console.log('Server started on http://localhost:3333');
})
