
function print (a) {
    console.log(a)
}
// console.log(a) // error
// print();

function count (initial) {
    var val = initial;
    function plus () {
        console.log(++val)
    }

    return plus

}
inital = 10
let s = count(inital)

// s()  // initial --> 11
// s()  // initial --> 12
//
// print(inital)


function createCounter(initVal, deltaVal){
    return {
        up() {
            initVal += deltaVal;
            console.log(initVal);
        },
        down() {
            initVal -= deltaVal;
            console.log(initVal);
        }
    }
}

var c = createCounter(10, 2);
c.up()
c.up()
c.down()