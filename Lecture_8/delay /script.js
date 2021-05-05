let btnWait = document.getElementById('btnWait')
let btnCount = document.getElementById('btnCount')
let divStatus = document.getElementById('divStatus')
let divVal = document.getElementById('divVal')

let count = 0
btnWait.onclick = () => {
    divStatus.textContent = "Waiting";
    console.log('waiting')
    // using while loop is the wrong method to have delay
    // as our other buttons become freeze but works on the back
    // let start = Date.now()
    // while(Date.now() <  start + 5000){
    //     // DO NOTHING
    //     // Delay loop for 5 sec !
    // }
    // divStatus.textContent = "Done";
    // console.log('done')

    // Solution -->
    setTimeout(() => {
        divStatus.textContent = "Done";
        count++;
        divVal.textContent = count
    },5000);


}

btnCount.onclick = () => {
    count++;
    console.log('count',count)
    divVal.textContent = count
}


// Date.now()  --> unix epoch time
//1:43:54