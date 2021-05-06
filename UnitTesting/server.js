const express = require('express')
const path = require('path')
const fareUtils = require(__dirname+'/fareutils')

const app = express()
app.use('/',express.static(path.join(__dirname,'public_static')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.post('/calcfare',(req,res) => {
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)

    // Logical part  -->
    // let fare = 50;
    // fare += (km > 5) ? ((km -5)* 10) : 0;
    // fare += (min > 15) ? ((min -5)* 2) : 0;

    let fare = fareUtils.calcfare(km,min)

    res.send({fare:fare})

})

app.get('/rate', (req,res) => {
    res.send(fareUtils.rate)
})

// to automate the test of our server.js file
// app.listen(4444, () => {
//     console.log('server started on http://localhost:4444')
// })

exports = module.exports = app
