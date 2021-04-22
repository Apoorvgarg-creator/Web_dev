var a =10;
a++;
console.log(a);

let b = 20;
b++;
console.log(b);

const c = 30;
// c++; // error
console.log(c);


const obj = {
    k1:'asd',
    k2:10,
    k3:false
};
obj['k1'] = 'Appy';
obj.k4 = 99;
console.log(obj);
delete obj.k1;
console.log(obj);

const arr = [1,2,3];
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);

var myVar = 10;
function alpha() {
    var myVar = 11;
    if(true){
        myVar = 21;
        console.log(myVar);
    }
    console.log(myVar)
}
console.log(myVar)
alpha()

let myVar1 = 10;
function beta() {
    let myVar1 = 11;
    if(true){
        let myVar1 = 21;
        console.log(myVar1);
    }
    console.log(myVar1)
}
console.log(myVar1)
beta()

const myVar2 = 10;
function gamma() {
    const myVar2 = 11;
    if(true){
        const myVar2 = 21;
        if(true){
            console.log(myVar2)
        }
        console.log(myVar2);
    }
    console.log(myVar2)
}
console.log(myVar2)
gamma()