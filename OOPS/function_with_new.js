function Person(name, age) {
    this.name = name;
    this.age = age;
    this.isAdult = function () {
        return this.age >= 18;
    }
    return 10
}

// let p = Person('Harry Potter',20)
// console.log(p) // Output --> 10
// console.log(name) // Output --> harry potter
// console.log(age) // output --> 20

// BUT if we use "new" keyword -->
let p = new Person('Harry potter',20)
console.log("p:" + JSON.stringify(p)) // Output --> {"name":"Harry potter","age":20}
// console.log(name)  // ERROR
console.log(p.name) // Output --> harry potter
console.log(p.isAdult())  // Output --> true

let p2 =new Person('Appy',14);
console.log(p2.isAdult()) // Output --> false



