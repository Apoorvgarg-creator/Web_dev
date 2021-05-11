const lib1 = require('./lib1')
const lib2 = require('./lib2')

// const lib2 = require('./lib2')
// const lib1 = require('./lib1')

console.log(`lib1:`, lib1)
console.log(`lib2:`, lib2)

console.log('lib1.lib2 --> ', lib1.lib2)
console.log('lib2.lib1 --> ', lib2.lib1)

// console.log('a + b = ',lib1.a + lib2.b)
