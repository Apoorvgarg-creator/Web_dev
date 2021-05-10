let btnWait1 = document.getElementById('btnWait1')
let inpTimeout1 = document.getElementById('timeout1')
let btnCancel1 = document.getElementById('btnCancel1')
let timeoutId2;
let wait = function (timeout) {
    return new Promise( (resolve, reject) => {
        if (isNaN(parseInt(timeout))){
            reject( new Error("timeout not a number"))
        }
        timeoutId2 = setTimeout(resolve,timeout*1000)
    })
}

btnWait1.onclick = () => {
    let value = parseInt(inpTimeout1.value)
    // console.log(value);
    wait(value).then(() => {
    console.log(`waited for ${value} sec`)
}).catch((err) => {
    console.error(err)
})
}

btnCancel1.onclick = () => {
    clearTimeout(timeoutId2);
    console.log("clear Timeout");
}