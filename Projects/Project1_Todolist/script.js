let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')
let btnClean = $('#btnClean')
let btnSort = $('#btnSort')

function toggleInputButtons() {
    btnReset.prop('disabled',inpNewTask.val() == '')
    btnAdd.prop('disabled',inpNewTask.val() == '')
    btnSort.prop('disabled',ulTasks.children().length <1)
    btnClean.prop('disabled',ulTasks.children().length <1)
}
function addItem () {
    let listItem = $(`<li>`, {
        'class': 'list-group-item',
        text : inpNewTask.val()
    })
    listItem.click((event)=> {
        $(event.target).toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val(``)
    toggleInputButtons()
}
function clearDone() {
    $('#ulTasks .done').remove()
    toggleInputButtons()
}
function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
    toggleInputButtons()
}

inpNewTask.keypress((e) => {
    if( e.which == 13)  addItem()
})

btnClean.click(clearDone)
btnSort.click(sortTasks)
inpNewTask.on('input',toggleInputButtons)

btnAdd.click(addItem)

btnReset.click(() => {
    inpNewTask.val(``)
    toggleInputButtons(false)
})


// function toggleResetBtn(enabled) {
//     if(enabled) btnReset.prop('disabled',false)
//     else btnReset.prop('disabled',true)
//
// }

// function toggleInputButtons(){
//     if(inpNewTask.val() != '') {btnReset.prop('disabled',false)
//         btnAdd.prop('disabled',false)
//     }else{
//         btnReset.prop('disabled',true)
//         btnAdd.prop('disabled',true)
//     }
// }
