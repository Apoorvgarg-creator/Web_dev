const express = require('express')

// const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','hbs')

app.use('/pages', require('./routes/pages').route)
app.use('/api', require('./routes/api').route)
app.use('/', express.static(__dirname + "/public_static"))

app.listen(4455, () => {
    console.log('Server started on http://localhost:4455');
})
