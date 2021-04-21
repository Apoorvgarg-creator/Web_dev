function outer (arg1) {
    let var1 = 10

    function inner (arg2) {
        let var2 = 20

        console.log(arg1,var1,arg2,var2)
    }

    return inner
}

let x = outer('param1')

//type of x == function
// x == inner
// scope of arg1 and var1 are from lines 2 to 8 - True
x('param2')

// closure scope --> A closure is the combination of a function
// bundled together (enclosed) with references to its
// surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer
//function’s scope from an inner function. In JavaScript,
// closures are created every time a function is created,
// at function creation time.
