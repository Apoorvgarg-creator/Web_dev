window.onload = function () {
    let newtask = document.getElementById('newtask');
    let addtask = document.getElementById('addtask');
    let todolist = document.getElementById('todolist');
    // let deletetask = document.getElementById('deletetask');
    addtask.onclick = function () {
        let li = document.createElement('li')
        // li.innerText = newtask.value

        // add the task text
        let taskspan = document.createElement('span')
        taskspan.innerText = newtask.value
        li.appendChild(taskspan)

        // add the delete btn
        let xBtn = document.createElement('button')
        xBtn.innerText = '❌'
        li.appendChild(xBtn)
        xBtn.onclick = function (event) {
            event.target.parentElement.remove()
        }

        // Add the Up btn
        let upbtn = document.createElement('button')
        upbtn.innerText = '⬆️'
        upbtn.onclick = function (event) {
            // event.target =  the up button
            // event.target.parentElement = the <li> item

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,
                event.target.parentElement.previousElementSibling
            )
        }
        li.appendChild(upbtn)

        // Add the Up btn
        let downbtn = document.createElement('button')
        downbtn.innerText = '⬇️'
        downbtn.onclick = function (event) {
            // event.target =  the down button
            // event.target.parentElement = the <li> item

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling, // insert next element
                event.target.parentElement  // before current element
            )
        }
        li.appendChild(downbtn)


        todolist.appendChild(li);
    }
    // deletetask.onclick = function () {
    //     let list = document.getElementsByTagName('li');
    //     for(let l1 of list) {
    //         if (newtask.value + '❌' == l1.innerText) {
    //             todolist.removeChild(l1)
    //             break
    //         } else {
    //             // let pp = document.createElement('p')
    //             console.log("Not found !!")
    //
    //         }
    //     }
    // }
}