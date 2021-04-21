console.log('1 == \'1\':',1 == '1')  // true
console.log("1 === `1`:",1 === `1`) // false

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// Loose equality ==
// strict equality ===

// peculiar case
console.log(`0 == '':`,0 == '')  // true, because Number(``) = 0
console.log(`\`\` == undefined:`,`` == undefined) // false
console.log(Number(``))

console.log(`'false' == false:`,'false' == false) // false, because Number('false') = NaN

console.log(Number('false'))
console.log(Number(false))

console.log(`` == false) // true, because both typecasted to 0
console.log('\n' == 0) // true
console.log('\t' == 0) // true
console.log('\n' == '\t') // false

// abstract equality doesn't hold transitive property

console.log([1,2] == [1,2]) // false, because two new arrays are created
let arr = [1,2]
let arr2 = arr
console.log(arr == arr2) // true, because both refers to the same array




