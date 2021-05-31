const express = require('express')
const session = require('express-session')

const expressSession = require('express-session')
const app = express()
app.set('view engine', 'hbs')

// let count = 0
app.use(expressSession({
    resave: false, // saves the cookie on each client <-> communicate
    saveUninitialized: false, // save cookie even if nothing to track
    secret : 'some long random string here', // used to encrypt the cookie
     
    
}))
app.get('/', (req,res) => {
    console.log(req.session)
    // count++
    if(!req.session.visits) req.session.visits = 1;
    else req.session.visits++;
    // res.render('index', {count})
    res.render('index', {count : +(req.session.visits)})

})
app.listen(3444, () => {
    console.log('Server started on http://localhost:3444')
})

