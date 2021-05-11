// const  lib1 = require('./lib1')
//
// console.log('from lib2:: lib1.a ',lib1.a)
// module.exports = {
//     b : 10,
//     lib1
// }

// Result of above code --> Output1.png

module.exports.b = 20
module.exports.lib1 = require('./lib1')