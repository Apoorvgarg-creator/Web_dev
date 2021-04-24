function helloSayer(times,name){
    let count = 0
    let loopId = setInterval(() => {
        count++
        console.log(`Hello ` + name)
        if(count === times){
            clearInterval(loopId)
        }
    },100)
}

// Concurrency on a single thread !
helloSayer(3,'Appy')
helloSayer(2,'Naruto')

module.exports = {
    helloSayer
}