const express = require('express')
const session  = require('express-session')
const app = express()
const {db,Users} = require('./db')
const multer = require('multer')
const fs = require('fs').promises
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'hbs')
const upload = multer({dest : 'uploads/'})
app.use('/images', express.static(__dirname + '/images'))
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '234hewbyewgixfwhiu123dshqbwhdg23y82ys83nean8'
}))
app.get('/signup', (req,res) => {
    res.render('signup')
})
app.post('/signup', upload.single('avatar'), async(req,res) => {
    const oldPath = __dirname + '/uploads/' + req.file.filename
    const newPath = __dirname + '/images/' + 'avatar_' + req.body.username + '.' + req.file.mimetype.split('/').pop()
    await fs.rename(oldPath,newPath)
    const user = await Users.create({
        username: req.body.username,
        email:req.body.email,
        password: req.body.password, // In production, we save hash of password
        avatar: '/images/' + 'avatar_' + req.body.username + '.' + req.file.mimetype.split('/').pop()
    })

    res.status(201).send(`User ${user.id} created`)

})
app.get('/login', (req,res) => {
    res.render('login')
})
app.post('/login', async(req,res) => {
    const user = await Users.findOne({
        where : {
            username: req.body.username,
        }
    })
    if (!user) return res.status(404).res.render('login', { error: 'Username not found'})
    if (user.password != req.body.password){
        return res.status(401).res.render('login', { error: `Password didn't match`})
    }
    req.session.userId = user.id
    res.status(201).redirect('/profile')

})

app.get('/profile', async (req,res) => {
    if(!req.session.userId){
        return res.redirect('/login')
    }
    const user = await Users.findByPk(req.session.userId)
    res.render('profile',{user})
})
app.get('/logout',(req,res) => {
    req.session.userId = null
    res.redirect('/login')
})
db.sync()
.then ( () => {
    app.listen(3444, () => console.log("Server started on http://localhost:3444"))
})
.catch(console.error())

// Handling cookie in api !
// jquery send cookie with ajax request
// jquery with credential