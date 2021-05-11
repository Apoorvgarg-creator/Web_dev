// Non-working code ==>
// const  lib2 = require('./lib2')
//
// module.exports = {
//     a : 8,
//     lib2
// }

// Result of above code --> Output1.png

// Working code -->
module.exports.lib2 = require('./lib2')
module.exports.a = 10
// module.exports.lib2 = require('./lib2')

console.log('lib1:: module.exports',module.exports)