
const express = require('express')

const app = express()

function decryptQueryParams(req,res,next) {
    
    next()
}
function decodeQueryBase64(req,res,next) {
    for(let q in req.query) {
       let data = req.query[q]
       // base64 to ASCII
       data = new ArrayBuffer(data, 'base64').toString('ascii')
       req.query[q] = data
    }
    next()
}
app.use('/',express.static(__dirname+'/public'))
app.get('/eval',decryptQueryParams, decodeQueryBase64, (req,res) => {
    console.log(req.query[q])

    // Todo: evaluate the code !
    res.send("Eval result")
    
})

app.listen(4545, () => {
    console.log('Server started on http://localhost:4545');
})