let btnWait = document.getElementById('btnWait')
let inpTimeout = document.getElementById('timeout')
let btnCancel = document.getElementById('btnCancel')
let timeoutId;
function wait1 (timeout, done) {
    if(isNaN(parseInt(inpTimeout.value))){
        return done(new Error("Timeout not a number"))
    }
    timeoutId = setTimeout(() => {
        done(null)
    },timeout*1000)
}

btnWait.onclick = function () {

     wait1(parseInt(inpTimeout.value), (err) => {
        if(err) console.error(err)
        else console.log("Wait over")
    })
}

btnCancel.onclick = function () {
    clearTimeout(timeoutId);
    console.log("Clear wait")
}