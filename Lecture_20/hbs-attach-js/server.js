const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','hbs')
app.use('/',express.static(__dirname+'/public'))
app.get('/hello', (req,res) => {
    let text = `Appy`
    if(req.query.name) text = req.query.name
    res.render('hello', {
        name: text
    })
})
app.listen(4444, () => {
    console.log('Server started on http://localhost:4444')
})