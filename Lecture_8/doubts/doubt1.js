function hellosayer() {
    console.log('world')
    return 'Hello'
}

console.log(() => {
    hellosayer();
})
// will print the definition of the function

// console.log(
//     (()=> {hellosayer();})()
// )



let x = function () { return 11}

console.log(x)  // output --> [Function: x]
