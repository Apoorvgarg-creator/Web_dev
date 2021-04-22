var intervalId;
var runCount = 0;
function sayHello () {
    runCount++;
    if(runCount>5){
        clearInterval(intervalId)
    }
    console.log("Hello !")
}
console.log("and the wait starts...")
// setTimeout(sayHello,1000);
// setTimeout(sayHello,1000);
// setInterval(sayHello,1000);

var intervalId = setInterval(sayHello,1000);
// clearInterval(intervalId);


// setTimeout(function (){
//     console.log("This runs after 1 sec")
// },1000);

