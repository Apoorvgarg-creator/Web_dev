const route = require('express').Router()
// This route is on the "/api/" path

const db = require('../db')
route.get('/persons', (req,res) => {
    // Send all the persons as an array
    db.getAllPersons()
    .then((persons) => res.send(persons))
    .catch((err) => res.send({error: err}))
})

route.post('/persons', (req,res) => {
    // Add the new person (details are in body)
    console.log(req.body)
    db.addNewPersons(req.body)
    .then(() => res.redirect('/api/persons'))
    .catch((err) => res.send({error:err}))
})


exports = module.exports = {route}