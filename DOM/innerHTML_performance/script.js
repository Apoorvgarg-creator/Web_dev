window.onload = function () {
    let num = document.getElementById('num')
    let list = document.getElementById('list')
    let print = document.getElementById('print')

    print.onclick = function () {
        let start = new Date().getTime();
        let N = parseInt(num.value)
        let listHTML = ''
        for(let i=0;i<= N;i++){
            listHTML += '<li>' + i + '</li>'
            // list.innerHTML += '<li>' + i + '</li>' // Very low performance of the website !!!!
            // innerHTML reduces the performance if you uses frequently !!
        }
        list.innerHTML = listHTML
        let end = new Date().getTime();
        let ans = end - start;
        console.log(ans);
        document.getElementById('p1').innerText = "Time taken to form the list: " + (ans);
    }
}

// Write on console
// new Date()
// newDate().getTime()  // gives Epoch time (UNIX time)

