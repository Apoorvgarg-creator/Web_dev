console.log(beta())
let a = 1
console.log(a)
// console.log(gamma())
function alpha () {
    return "A"
}
function beta () {
    return "B"
}

let gamma = function () {
    return "C"
}

console.log(gamma())

function area(height, width){
    if (typeof width == 'undefined') {
        return Math.PI * height * height
    }
    console.log('height =', height, 'width =',width)
    return height * width
}
// function area(height){
//     console.log('height =',height,'width = 10')
//     return height * 10
// }
console.log('area (3,4)', area(3,4))
console.log('area 4', area(4))