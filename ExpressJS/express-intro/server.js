const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) =>{
    // console.log(req.url)
    res.send('<h1 style="color: red">Hello World</h1>')
})

app.get('/greet', (req, res) =>{
    // console.log(req.url)
    // console.log(req.headers)
    // console.log(req.query)
    let person = 'Guest'
    if(req.query.person){
        person = req.query.person
    }
    res.send('Good Morning ' + person)
})
// :city this make path variable in nature {path parameter}
// if make to two of them only the first one works since both are same path
app.get('/:city/welcome',(req,res) => {
    res.send('Welcome to ' + req.params.city+'!')
})

app.get('/:person/:action',(req,res) => {
    res.send('Thank you ' + req.params.person+' for '+ req.params.action)
})
app.post('/greet', (req, res) =>{
    console.log(req.body)
    let person = 'Guest'
    if(req.body.person){
        person = req.body.person
    }
    res.send('Good Evening ' + person)
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname +'/Files/form.html')
})

app.listen(4444, () => {
    console.log('server started on http://localhost:4444')
})

