// Concept of variable
c = 20; // Global variable
var d = 30;  // Function Scope
let e = 40;  // Block scope

let b = [1,2,3,4,5];

// sqrt_n(10); // Hoisting
SquareRoot(10);

function fun() {
    let a = 5;
    if(a == 5){
        let b = 10;
        // console.log("Inside",b);
        // var f = 10;
        f = 10;
        console.log("Inside",f);
    }
    // console.log("Outside",b);
    console.log("Outside",f);
}

fun();

console.log("Global",f);

function SquareRoot(n) {
    console.log("In first sqrt function");
    // console.log(Math.sqrt(n));
    return typeof Math.sqrt(n);
}

// Function Hoisting

var sqrt_n = function (){
    console.log("In second sqrt function");
    return undefined;
}
SquareRoot(10);
sqrt_n(10);