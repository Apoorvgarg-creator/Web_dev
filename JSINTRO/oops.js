// Object Oriented Programming in Javascript

// Allows to create objects without defining the class

// One way of creating javascript object(JSON)
var bird = {
    x:100,
    y:20,
    color:"blue",
    eggs : ["one","two","three","four"],
    fly:function (){
        console.log("Bird is flying",this.x,this.y);
    }
};


// bird.x;

// for loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}

// for each loop

bird.eggs.forEach(function (val,idx){
    console.log(idx," --> ",val);
});

// Another way of creating javascript object
function Fruit(taste, color){
    this.color = color;
    this.taste = taste;
}

let mango = new Fruit("sweet","yellow");
let orange = new Fruit("sour","orange");

var apple = {
    taste: "sweet",
    color: "red",
}

// Third way to create an object -->
// Class keyword ( ECMAScript 2015)
// class declaration, will not be hoisted
class FruitClass{
    constructor(taste,color) {
        this.color = color;
        this.taste = taste;
    }

};

let kiwicl = new FruitClass("sour","green");

console.log("Fruitclass taste",kiwicl.taste)

// class expression, Will not be hoisted
let Fruitexpression = class  {
    constructor(taste,color) {
        this.taste = taste;
        this.color = color;

    }

};

let kiwiexp = new Fruitexpression("sour","green");
console.log(kiwiexp.taste);