// Concept of variable
c = 20; // Global variable
var d = 30;  // Function Scope
let e = 40;  // Block scope

let b = [1,2,3,4,5];

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