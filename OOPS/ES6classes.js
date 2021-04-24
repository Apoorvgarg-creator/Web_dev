class Person {
    constructor(name, age) {
        this.name = name
        this.age = age

    }

}

let p = new Person('harry potter',15)

console.log(p)
// console.log(new Person('draco malfoy',14))
// console.log(Person.prototype.isPrototypeOf(p))  // true

class Student extends Person {
    constructor(name, age, Grade) {
        super(name,age);
        this.Grade = Grade
    }
}

let s1 = new Student('Appy',21,'IT')
// console.log(Student.prototype)
console.log(s1)
// console.log(s1.__proto__ == Student.prototype)  // true
// console.log(s1.__proto__.__proto__ == Person.prototype)   // true
// console.log(Person.prototype.isPrototypeOf(s1))   // true
