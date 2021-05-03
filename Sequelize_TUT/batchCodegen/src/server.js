const express = require('express')
const path = require('path')
const {Center,Course,Season,Batch} = require('./db/models')
const app = express()

app.set('view engine','hbs')
app.set('views',path.resolve(__dirname,'../views'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',async (req,res) => {
    try {
        const centers = await Center.findAll();
        const seasons = await Season.findAll();
        const courses = await Course.findAll();
        const years = [2017, 2018, 2019, 2020, 2021]
        res.render('batchcode',{
            centers, seasons, courses, years
        })


    }catch (e){
        console.error(e);
    }
})

app.post('/batchcode',async (res,req)=> {
    let batchcode = ''
    batchcode += req.body.course
    batchcode += req.body.center
    batchcode += req.body.year.substr(2)
    batchcode += req.body.season
    batchcode += req.body.batchno
    try {
        await Batch.create({
            code: batchcode,
            year: req.body.year,
            courseId: req.body.course,
            centerId: req.body.center,
            seasonId: req.body.season,
            start : Date.parse(req.body.start),
            end : Date.parse(req.body.end)
        })
        console.log(batch);

        res.send(batch.code);
    }catch (e){
        console.error(e);
    }

})

app.get('/batches', async (res,req) => {
    try {
        const batches = await Batch.findAll({
            include: [Course,Season,Center]
        })

        // batches.forEach(b => console.log(b.dataValues))
        // batches.forEach(b => console.log(JSON.stringify(b.dataValues)))

        res.render('batches',{batches})
    }catch (e) {
        console.error(e);
    }
})
module.exports = {
    app
}