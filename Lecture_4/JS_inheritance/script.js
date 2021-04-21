// Inheritance in javascript:-
let obj1 = {
    a:10,
    b:20,
    c:30
}

console.log(obj1)
// Object to Object inheritance -->
let obj2 = Object.create(obj1)

console.log(obj2)  // shows an empty object

// prototype based inheritance -->
console.log(obj2.a)
console.log(obj2.b)
console.log(obj2.c)

console.log(obj1 == obj2) // false
console.log(obj2.__proto__) // only for debugging, not for practical use
console.log(obj2.__proto__ == obj1) // true

/*
    obj2.a --> It will try to find a in obj2
    -> if not found,
    --> it will try to find it in obj2.__proto__
    --> if not found,
    --> it will try to find it in obj2.__proto__.__proto__
    --> ans so on
    --> till .__proto__ becomes null

 */

obj2.p = 'adg'
obj2.q = 'dgn'
obj2.r = 'app'

let obj3 = Object.create(obj2)
console.log("obj2:",obj2)
console.log('obj3:',obj3)
console.log("obj3.__proto__ == obj2:",obj3.__proto__ == obj2)
console.log("obj3.__proto__.__proto__ == obj1:",obj3.__proto__.__proto__ == obj1)
console.log('obj3.p:',obj3.p)
console.log('obj3.a:',obj3.a)


console.log(`obj1.a:`,obj1.a)
console.log(`obj1.a++:`,obj1.a++)
console.log(`obj1:`,obj1)
console.log(`obj2.a++:`,obj2.a++)
console.log(`obj2:`,obj2)
console.log(`obj1.a:`,obj1.a)
console.log("obj2.__proto__ == obj1:",obj2.__proto__ == obj1)

obj2.b = obj2.b + 1

console.log(`obj2:`,obj2)
console.log('obj1.b',obj1.b)
console.log(`obj3.b`,obj3.b)
console.log(`obj3.c`,obj3.c)







