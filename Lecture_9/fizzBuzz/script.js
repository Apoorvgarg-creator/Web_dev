let inpNum = document.getElementById('inpNum')
let btnPrint = document.getElementById('btnPrint')
let ulNumlist = document.getElementById('ulNumlist')

function printList (item) {
    for(let i =1;i <= item;i++){
        let addList = document.createElement('li');
        if (i % 3 == 0 && i % 5 == 0){
            var text = i + " ➡️ Fizzbuzz";
            addList.textContent  = text;
            ulNumlist.appendChild(addList)
        }else if (i % 3 == 0){
            var text = i + " ➡️ Fizz";
            addList.textContent  = text;
            ulNumlist.appendChild(addList)
        }else if (i % 5 == 0){
            var text = i + " ➡️ buzz";
            addList.textContent  = text;
            ulNumlist.appendChild(addList)
        }else{
            // Do nothing
        }
    }
}


function printListBetter (item) {
    for(let i =1;i <= item;i++){
        let addList = document.createElement('li');
        let print = ''
        if (i % 3 == 0) print += fizz;
        if (i % 5 == 0) print += buzz;
        if (print === i ) print = i;

        addList.textContent = print

        ulNumlist.appendChild(addList)
    }
}


function printListWithoutModulo (item) {
    var c3 = 0;
    var c5 = 0;
    for(let i =1;i <= item;i++){
        let addList = document.createElement('li');
        let print = ''
        c3++;
        c5++;
        if (c3 == 3) {
            c3 = 0
            print += "fizz";
        }
        if (c5 == 5) {
            c5 = 0
            print += "buzz";
        }
        if (print === '' ) print = i;

        addList.textContent = print

        ulNumlist.appendChild(addList)
    }
}
btnPrint.onclick = function () {
    var item = parseInt(inpNum.value);
    let start = Date.now();
    printListWithoutModulo(item);

    console.log('Time taken :',Date.now() - start )

}