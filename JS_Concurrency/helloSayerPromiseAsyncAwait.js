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


async function task () {
   await helloSayer(3,'Appy')
   await helloSayer(2,'Naruto')
   await  helloSayer(3,'luffy')

}

task()