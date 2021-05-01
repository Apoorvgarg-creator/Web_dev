function download (url) {
    return new Promise(function (resolve, reject){
        if (!url.startsWith("http")){
            reject(new Error("Url does not start with http"))
        }else {
            console.log("start download: "+ url)
            setTimeout(function (){
                let filename = url.split("/").pop()
                // console.log(filename)
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
                console.log(filename)
                let resizedFile = filename.split(".")[0] + "-resized.png";
                // console.log(resizedFile)
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
// download('http://cb.lk/logo.png')
//     .then(function (fileName){
//         resize(fileName).then(function (resizedFile) {
//             console.log("resizedfile ia at: "+ resziedFile)
//         })
//     })


// download('http://cb.lk/logo.png')
// .then(resize)
// .then(function (resziedFile){
//          console.log("resizedfile ia at: "+ resziedFile)
//      })

// download('ftp://cb.lk/logo.png')
// .then(resize)
// .then(function (resziedFile){
//          console.log("resizedfile ia at: "+ resziedFile)
//      })
// .catch(function (err){
//     console.error(err)
// })

// download('http://cb.lk/logo.jpg')
//     .then(resize)
//     .then(function (resziedFile){
//         console.log("resizedfile ia at: "+ resziedFile)
//     })
//     .catch(function (err){
//         console.error(err)
//     })

download('http://cb.lk/logo.png')
    .then(resize)
    .then(upload)
    .then(function (uploadUrl){
        console.log("resizedfile ia at: "+ uploadUrl)
    })
    .catch(function (err){
        console.error(err)
    })