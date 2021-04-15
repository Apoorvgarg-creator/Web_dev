function greet(name){
    return 'Hello ' + name
}
function createGreeter(greeting){

    function greet(name){
        // we treat name as a string
        // console.log(greeting, name)
        // we treat name as a function
        console.log(greeting, name())
    }

    return greet
}

function getName() {
    return document.getElementById('namebox').value
}
let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')

// console.log(typeof g1)
console.log(greet('Arnav'))
console.log(greet('Prateek'))
console.log(g1('Apoorv'))
console.log(g2('Garg'))