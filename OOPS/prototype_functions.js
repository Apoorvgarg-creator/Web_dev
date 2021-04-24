function Person(name,age){
    this.name = name;
    this.age = age;
    // this.isAdult = function (){ return this.age >= 18;}
}
Person.prototype.city = 'delhi'
let p = new Person('Harry Potter',15)
let p2 = new Person('John Doe',30)

// console.log(p.isAdult())
// console.log(p2.isAdult())

// console.log(p.isAdult == p2.isAdult) // false
// This means that both refers to different object
// representing --> it takes extra memory for defining the same function
// hence for saving the memory , we can define the same function in its prototype
// because of which it will refer to the same function

Person.prototype.isAdult = function (){ return this.age >= 18;}
console.log(p.isAdult == p2.isAdult) // true

// Person.isPrototypeOf(p) // false
// Person.prototype.isPrototypeOf(p) // true



