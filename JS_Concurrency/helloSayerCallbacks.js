function helloSayer(times,name,doneSaying){
    let count = 0
    let loopId = setInterval(() => {
        count++
        console.log(`Hello ` + name)
        if(count === times){
            clearInterval(loopId)
            doneSaying()
        }
    },100)
}

// Concurrency on a single thread !
helloSayer(3,'Appy',(err) => {
    helloSayer(2,'Naruto', () => {
        helloSayer(3,'Luffy',() =>{

        })
    })
})


// module.exports = {
//     helloSayer
// }