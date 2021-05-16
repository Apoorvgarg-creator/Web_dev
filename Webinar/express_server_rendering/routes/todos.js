const route = require('express').Router()

let todos = [

]
route.get('/', function(req, res){
    res.render('todos', // file to be render
     {todos}            // object/data
     )
})

route.post('/', function (req, res) {
    todos.push({
        task: req.body.newtodo
    })
    res.redirect('/ todos')

})

module.exports = route