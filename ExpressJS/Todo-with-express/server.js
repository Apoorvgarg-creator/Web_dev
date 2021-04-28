const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.set('view engine','hbs')

let tasks = [
    'sample task'
]

app.get('/', (res,req) => {
    app.render('home.hbs',{
        title: 'Todo List',
        tasks
    })
})

app.post('/', (req,res) => {
    tasks.push(req.body.newtask)
    res.redirect('/')
})
// app.get('/', (req,res) => {
//
//     let taskList = tasks.map(t => `<li>${t}</li>`).join('\n')
//     console.log(taskList)
//     res.send(`<html>
//     <body>
//     <form action ='/' method="post">
//         <input name="newtask">
//             <button type='submit'>Add</button>
//     </form>
//     <ul>
//         ${taskList}
//     </ul>
//     </body>
//     </body>
//     </html>`)
// })


app.listen(5555, () => {
    console.log('server started on http://localhost:5555')
})