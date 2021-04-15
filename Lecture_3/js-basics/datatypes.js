function a () {
    return 1
}
// Javascripts lets you pass a function as an argument in another function
// In javascript only runtime error occurs since there is no compile-time stage
// let a = function (){
//     return 2
// }

console.log(13313, typeof 13313)
console.log(234234.5356,typeof 234234.5356)
console.log('a', typeof 'a')
console.log("ApoorvGarg", typeof "ApoorvGarg")
console.log(true, typeof true)
console.log(null, typeof null)
console.log(undefined, typeof undefined)

console.log(a, typeof a)
console.log(a(),typeof a())

let b = 1

console.log(a(),b)