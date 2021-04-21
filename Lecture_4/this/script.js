// "this" keyword

function checkThis() {
    // this refers to window as of now
    console.log(this)
}

checkThis()

// all keys are string
let obj = {
    a: 10,
    b: `appy`,
    c: true,
    d: function (){
        // this is a pointer to the object itself
        console.log(this)
    },
    10: 10000,
    e: {
        l: 234,
        m: `Apoorv`,
        n : function (){
            console.log(this)
        }
    }
}


console.log(obj)
obj.d()

let x = obj.a

console.log(x)

let y = obj.d

console.log(typeof y)
// this will refer to window here because javascript interpreter checks how the funciton is called
y()

obj.e.n()

console.log(obj[`10`])
