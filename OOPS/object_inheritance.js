let a = {p:10, q:'aksds',r:false}

let b = Object.create(a)

b.aq = 10
b.ad = 111
console.log(b) // {}
// Prototype based inheritance !!
console.log(b.__proto__)
console.log(b.p) // 10 : we got this value because b.prototype contains p variable

let c = Object.create(b)
b.q = 'appy'
// console.log(b)
console.log(c.__proto__)
console.log(c.q) // appy
console.log(c.p) // 10
console.log(c.__proto__.__proto__)

