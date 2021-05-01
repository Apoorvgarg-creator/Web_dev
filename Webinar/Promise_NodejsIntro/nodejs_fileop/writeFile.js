const fs = require('fs')

fs.writeFile(__dirname+'/myfile.txt',"somedata",function (err){
    if(err) throw err

    console.log("file created!")
})