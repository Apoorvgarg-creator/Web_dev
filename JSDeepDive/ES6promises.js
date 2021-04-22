// lib --> bluebird

// function fakedownload (done) {
//     setTimeout(function ()
//     {
//         let downloadData = "some data we ripped of the interwebs"
//         done(downloadData)
//     },1000)
// }
//
// fakedownload(function (data) {
//     console.log("we downloaded a file, which had this data -->")
//     console.log(data)
// })


function fakeDownloadPromise (correct) {
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            let downloadedData = "Some data from the net"
            console.info("Downloading has completed")
            if(correct) {
            resolve(downloadedData)
            }else {
                reject(new Error("Could not download file"))
            }
        },1000)
    })
}

let downloaded = fakeDownloadPromise(true);
downloaded.catch(function (err){
    console.log(err)
})
// defer the task with the help of promises -->
setTimeout(function (){
    downloaded.then(function (data){
        console.info("The data that was downloaded in this -->")
        console.info(data)
    })
},3000)

// fakeDownloadPromise(false).then(function (data){
//     console.log("The data that we downloaded is  --> ")
//     console.log(data)
// }).catch(function (err){
//     console.log(err)
// })
