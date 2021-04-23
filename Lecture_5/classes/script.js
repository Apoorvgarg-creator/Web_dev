class Person {   // 3 level from null
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isAdult(){
        // if( this.age >= 18){
        //     return true
        // }else{
        //     return false
        // }
        return this.age >= 18;
    }

}
let p = new Person('Appu',20)
let p1 = new Person('Appy',19)
let p2 = new Person('Apoorv',16)

console.log(p)
console.log(typeof Person)  // function : there is no new datatype called 'class'
console.log(p.__proto__ == Person.prototype)  // true
console.log(p.__proto__.__proto__ == Object.prototype)  // true
// console.log(p.__proto__.__proto__.__proto__) // null

if (p1.isAdult()){
console.log(p1.name,"is eligible to vote")
}
else{
    console.log(p1.name,"is not eligible to vote")
}

// Inheritance syntax -->
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade
    }
}

let s1 = new Student("Harry Potter",13, 'GradeA')
let s2 = new Student("Draco Malfoy",13,'GradeB')
console.log(s1.isAdult())
console.log(s1.__proto__ == Student.prototype)
console.log(s1.__proto__.__proto__ == Person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)


// Inheritance chain -->
// Object.prototype --> Person.prototype --> Student.prototype

// no inheritance between the classes (actually they are functions)
// Object has no relation with person and person has no relation with student





// OLD Convention -->
function Person1 (name, age) {
    this.name = name
    this.age = age
    // function isadult() {
    //     return this.age >= 18;
    // }
    // return isadult
}
let p3 = new Person1('Appy',22)
console.log(p3)
// console.log(`p3():`,p3())
// console.log(p3.__proto__ == Person1.prototype)
