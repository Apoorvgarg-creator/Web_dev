const fs = require('fs')
let array =[];
function Read() {
    return new Promise((resolve, reject) {
    fs.readFile(__dirname + '/Data.txt', function (err, data) {
        if (err) throw err

        let dataArray = data.toString().toLowerCase().split(`\n`)

        for (let i = 0; i < dataArray.length; i++) {
            // console.log(dataArray[i])
            let count = 0
            for (let arrayKey in array) {
                count++;
                if (dataArray[i] == array[arrayKey].animal) {
                    // console.log("same animal")
                    array[arrayKey].freq += 1
                    break;
                }
            }
            if (count == array.length) {
                // console.log("new animal discovered")
                let obj = {'animal': dataArray[i], 'freq': 1}
                array.push(obj);
            }
        }

        resolve();

    })

})
}
Read().then(() => console.log(array))


