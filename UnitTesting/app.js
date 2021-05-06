const app = require(__dirname + '/server')

app.listen(4444, () => {
    console.log('server started on http://localhost:4444')
})