function helloSayer(times,name){
    return new Promise((resolve, reject) => {
        let count = 0
        let loopId = setInterval(() => {
            count++
            console.log(`Hello ` + name)
            if (count === times) {
                clearInterval(loopId)
                resolve()
            }
        }, 100)
    })
}

// code getting untidy the same way as in callbacks -->
// helloSayer(3,'Appy').then(() =>{
//     helloSayer(2,'Naruto').then(() => {
//         helloSayer(3,'luffy')
//     })
// })

// Solution -->
helloSayer(3,'Appy')
    .then(() => helloSayer(2,'Naruto')
        .then(() => helloSayer(3,'luffy')))