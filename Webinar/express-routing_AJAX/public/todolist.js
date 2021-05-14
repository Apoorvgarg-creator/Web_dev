let newtodolist = $(`#newtodo`)
let addtodo = $(`#addtodo`)
let todolist = $('#todolist')

addtodo.click(function () {
    let newtodo = newtodolist.val()
    // xhr/Ajax - without making the request, client can make some get and post request
    $.post(
        '/todos/',  //path
        { task: newtodo }, // body
         function (data){   // callback
            todolist.empty();
            for(todo of data){
                todolist.append("<li>"+todo.task+"</li>")
            }
        }   
    )
    
})