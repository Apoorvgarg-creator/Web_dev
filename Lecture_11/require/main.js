const lib1 = require('./lib1')

console.log('Hello World')

if( typeof window !== 'undefined'){
    console.log('running in browser')
}else{
    console.log('running in node')
}

lib1.sayHello('Apoorv')

console.log(lib1.omg)


// setTimeout(() => {
//     console.log(lib1)
//
// },2000)

setTimeout(() => {
    console.log(lib1)

    const lib1_new = require('./lib1')
// If we require the same file again it doesnot read the file again from scratch rather it will refer to the same file
    console.log(lib1_new)
},1000)
