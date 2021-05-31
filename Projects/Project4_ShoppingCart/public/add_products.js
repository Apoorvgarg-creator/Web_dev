$(function () {
    let productName = $('#productName')
    let manuName = $('#manfacName')
    let price = $('#price')
    $('#addProduct').click(function () {
        addProduct(
            productName.val(),
            manuName.val(),
            price.val(),
            function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database !")
            }
        )
    })
})