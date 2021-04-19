// Concept of variable
c = 20; // Global variable
var d = 30;  // Function Scope
let e = 40;  // Block scope

let b = [1,2,3,4,5];

// sqrt_n(10); // Hoisting
SquareRoot(10);
// Function declaration
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
// Function expression
var sqrt_n = function (){
    console.log("In second sqrt function");
    return undefined;
}
SquareRoot(10);
sqrt_n(10);

let arr = ['Apple','Mango','Guava'];
arr.length;
arr["length"];
arr[0]


for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.push("banana");  // Insert element at the end
arr.pop(); // remove from last
arr.indexOf("Mango"); // gives index of
arr.shift(); // remove from front
arr.unshift("kiwi"); // insert at front

if(arr[0]=="Apple"){
    console.log("Apple");
}else{
    console.log("First element",arr[0]);
}