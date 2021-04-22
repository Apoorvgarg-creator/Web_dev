let str = "asdasd" // 3 levels from null
let num = 233  // 3 levels from null
let bool = true   // 3 levels from null
let arr = [246, 436, 6, 346]   // 3 levels from null
let obj = {a:10, b:'asdasd'} // 2 levels from null
let fun = function (){      // 3 levels from null
    console.log()
}

// if x and y are not primitive
// x == y : true <- what does this mean ?
// This means they both refer to the same object

console.log(typeof String) // function

console.log(typeof String(true))
console.log('======= Types ========')
console.log('typeof Sring:', typeof String)
console.log('typeof Object:', typeof Object)
console.log('typeof Number:', typeof Number)
console.log('typeof Array:', typeof Array)
console.log('typeof Boolean:',typeof Boolean)
console.log('typeof Function:', typeof Function)

let array = Array(2,3,4,5,6)
console.log(Object('y','z:true'))
console.log(Object(true))

// window.String // window
// window.Object

console.log(str.__proto__)
console.log(str.__proto__.__proto__)
console.log(str.__proto__.__proto__.__proto__)
console.log(obj.__proto__.__proto__)
console.log(fun.__proto__.__proto__.__proto__)

console.log('======= proto chain ========')
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)

// Everything indirectly inherits from the same thing
// that obj is inherited from
// i.e. In javascript, everything is essentially an Object

console.log('======== Prototypes =======')
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(fun.__proto__ == Function.prototype)
console.log(arr.__proto__ == Array.prototype)

// console.log(typeof Object.prototype)
console.log("typeof String.prototype:",typeof String.prototype)

// console.log(document.body.__proto__)
// console.log(HTMLBodyElement.prototype)

// String.prototype inherits from Object.prototype

console.log(typeof Object.create(Boolean.prototype))

let x = Object.create(Boolean.prototype)

console.log(x.__proto__ == bool.__proto__)

console.log('Object.__proto__:',Object.__proto__)
console.log('Object.prototype.__proto__:',Object.prototype.__proto__)

