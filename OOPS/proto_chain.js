let a = { p:10,q:'asdasd',r:true}

let b = Object.create(a)

b.__proto__
// {p: 10, q: "asdasd", r: true}
let c = Object.create(b)

c.__proto__
// {}__proto__: Object
c.__proto__ == b
// true
c.__proto__.__proto__ == a
// true
Object.prototype == Function
// false
Object.prototype
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(Object.prototype)
// VM830:1 {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}


b.__proto__.p++
// 10
a.p
// 11
console.log('a is changed')

let x = "Appy"

x.__proto__ == String.prototype
// true
typeof String.__proto__
// "function"
typeof String.prototype
// "object"
let b = "Apppppp"

b.__proto__
// String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
b.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
b.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
b.__proto__.__proto__.__proto__
// null
Object.prototype.isPrototypeOf
// ƒ isPrototypeOf() { [native code] }
Object.prototype.isPrototypeOf(Number.prototype)
// true
Number.prototype == Object.prototype
// false
Number.prototype.__proto__ == Object.prototype
// true
Number.prototype.isPrototypeOf(Object.prototype)
// false

// undefined.__proto__