// Arrays

let arr = [1,2,3,4,5]

// console.log(arr)
// console.log(arr["length"]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// heterogeneous array -->
let arr2 = [1,"hello", false,arr]

// for(let i=0;i<arr2.length;i++){
//     console.log(typeof arr2[i])
// }

// for-of loop
// for( let val of arr2){
//     console.log(val)
// }

// for-in loop
// for(let index in arr2) {
//     console.log(arr2[index])
// }


// Add/remove items  --> push/pop/shift/unshift
let fruits = ['apple','mango','kiwi']
// console.log(fruits)
// fruits.push('guava','banana')
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.shift()
// console.log(fruits)
// fruits.unshift('pear','grapes')
// console.log(fruits)


// data changing
// slice, splice and concat
// let notes = [`do`, `re`,'mi',`fa`,`so`,`la`,`ti`,`do`]
let notes = ['do','re','mi']
// console.log(notes)

//slice()
console.log(notes.slice(4,6))


//splice()
// let omit = notes.splice(4,2)
// console.log("notes:",notes)
// console.log("omit:",omit)

// splice() - part 2
// notes.splice(0,3,'sa','re','ga')
// console.log(notes)

// concat
// console.log(notes.concat(['sa','re','ga']))
// console.log(notes.concat('sa','re','ga'))
console.log(notes)
