const route = require('express').Router()
const db = require('/Users/apoorvgarg/WebstormProjects/CB_lecture/Webinar/sql-with-express/sql-api-method/db.js')

route.get('/', (req,res) => {
    db.getAllPersons()
    .then((persons) => {
        res.render('person',{persons})
    })
    .catch((err) => {
        res.send(err)
    })
    
})

route.get('/add', (req,res) => {
    res.render('person_add',)
})

route.post('/add',(req,res) => {
    db.addNewPersons(req.body)
    .then(() => {
       res.redirect('/pages');
    }).catch((err) => {
        res.send(err);
    })
    
})

exports = module.exports = { route }