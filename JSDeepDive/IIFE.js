// IIFE - Immediately invoked function expression

(function () {
    console.log("hello");
})();

// benefits of iife -> can create local scope without affecting the global scope

(function (){
    var a = 10;
    var b = a / 5;
    console.log(a+b);
})();

// console.log(a); // error

if(true){
    var a =10;
}

console.log(a);


// function doMath () {
//     console.log("3^4 = " + Math.pow(3,4));
//     console.log("4^3 = " + Math.pow(4,3));
//     console.log("root(2) = " + Math.sqrt(2));
//     console.log("sin(10) = " + Math.sin(10));
// }
//
// doMath();

// doing the above thing with IIFE


(function (l, p, r, s) {
    l("3^4 = " + p(3,4));
    l("4^3 = " + p(4,3));
    l("root(2) = " + r(2));
    l("sin(10) = " + s(10));
})(console.log,Math.pow, Math.sqrt,Math.sin);


// classic use of IIFE

// for( var i =0; i<10;i++){
//     setTimeout(function (){
//         console.log(i);
//     },100)
// }

// solution with IIFE
// for( var i =0; i<10;i++){
//     (function (j){
//         setTimeout(function (){
//             console.log(j);
//         },100)
//     })(i)
// }

// Another solution -->
// for( let i =0; i<10;i++){
//     setTimeout(function (){
//         console.log(i);
//     },100)
// }

//another solution

for( var i =0; i<10;i++){
    setTimeout(console.log,100,i)
}


