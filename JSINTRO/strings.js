// Strings

let str = 'this is appy \'s string';
let p = 'appy';
// backticks --> `
let str1 = `this is ${p}'s string`;

// `\n` to have a new line
let longstr = `this is \
a very long \
string`;
console.log("str1: ",str1);
console.log("length of p :",p.length);
console.log(longstr.length);


// Searching

let s = ' This has some data here'
let key = 'has'

console.log(s.indexOf(key));
console.log(s.indexOf('have')); // -1 represents not found

let s1 = `this is a easy job`
console.log(s1.indexOf(`is`,3))

let s2 = `ab aab abbcd ba aab`
console.log(s2.lastIndexOf('ab'))