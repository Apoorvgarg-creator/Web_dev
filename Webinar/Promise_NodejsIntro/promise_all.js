function download (url) {
    return new Promise(function (resolve, reject){
        if (!url.startsWith("http")){
            reject(new Error("Url does not start with http"))
        }else {
            console.log("start download: "+ url)
            setTimeout(function (){
                let filename = url.split("/").pop()
                resolve(filename);
            },3000)
        }
    })
}

function resize(filename){
    return new Promise(function (resolve, reject){
        if(!filename.endsWith(".png")){
            reject(new Error("File is not in png format"))
        }else{
            console.log("start resizing: "+ filename)
            setTimeout(function (){
                let resizedFile = filename.split(".")[0] + "-resized.png";
                resolve(resizedFile);
            },3000)
        }
    })
}

function upload(resizedFileName) {
    return new Promise( function (resolve,reject){
        console.log("start upload: "+ resizedFileName)
        setTimeout(function (){
            let uploasUrl = "http://imgur.com/" + resizedFileName;
            resolve(uploasUrl)
        },3000)
    })
}

// Promise.all([
//     download('http://cb.lk/logo.png'),
//     download('http://cb.lk/banner.png'),
//     download('http://cb.lk/promo.png')
// ]).then(function (values){
//     Promise.all([
//         resize(values[0]),
//         resize(values[1]),
//         resize(values[2])
//     ]).then(function (values1){
//         Promise.all([
//             upload(values1[0]),
//             upload(values1[1]),
//             upload(values1[2])
//         ])
//     })
// }).catch(function (err){
//     console.error(err)
// })

Promise.all([
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png')
]).then(function (downloadValues){
    return Promise.all(downloadValues.map(resize))
}).then(function (resizeValues){
    return Promise.all(resizeValues.map(upload))
}).then(function (UploadValues){
    console.log("Finished all the tasks !")
}).catch(function (err){
    console.error(err)
})