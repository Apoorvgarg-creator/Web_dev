// console.log($('#list'))

// $(() => {
//     console.log('inside $ fn')
//     console.log($('#list'))
// })
// if valid HTML syntax is passed in $(), then it creates the element!
$(() => {
    let item = $('#item')
    let list = $('#list')
    $('#prepend').click(() => {
        let text1 = item.val()
        list.prepend($('<li></li>').text(text1))
        // list.prepend($('<li>${text1}</li>'))

    })

    $('#append').click(() => {
        let text1 = $('#item').val()
        list.append($('<li></li>').text(text1))
    })


})