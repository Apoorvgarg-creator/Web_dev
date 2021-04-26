function someAsyncTask(callback){
    console.log("Beginning of task")
    setTimeout(() =>{
        console.log("End of task")
        callback();
    },3000);
}

// someAsyncTask(() => {
//     console.log("We did some task")
// })

// How Promises work -->

let someTaskPromise = function (){
    return new Promise(function (resolve,reject){
        someAsyncTask(resolve)
    })
}

someTaskPromise()
    .then(() =>{
    console.log('After task is complete')
});