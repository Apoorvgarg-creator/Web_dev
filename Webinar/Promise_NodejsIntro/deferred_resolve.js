function downloadPromise() {
    return new Promise(function (resolve, reject){
        console.log("starting to download the file")
        setTimeout(function (){
            console.log("Download is complete")
            resolve();
        },3000)
    })
}

// downloadPromise().then(function () {
//     console.log("After download")
// })

// we want the result later -->


// deferred resolve -->
let downloadedFile = downloadPromise()
setTimeout(function (){
    downloadedFile.then(function (){
        console.log("After download")
    })
},5000)