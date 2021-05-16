const express = require('express')

const app = express()

const db = require('./db')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','hbs')
// app.set('views','views')

app.get('/', (req,res) => {
    db.getAllPersons()
    .then((persons) => {
        res.render('person',{persons})
    })
    .catch((err) => {
        res.send(err)
    })
    
})

app.get('/add', (req,res) => {
    res.render('person_add',)
})

app.post('/add',(req,res) => {
    db.addNewPersons(req.body)
    .then(() => {
       res.redirect('.');
    }).catch((err) => {
        res.send(err);
    })
    
})
app.listen(4455, () => {
    console.log('Server started on http://localhost:4455');
})
