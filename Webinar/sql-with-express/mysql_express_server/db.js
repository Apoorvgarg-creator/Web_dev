const mysql2 = require('mysql2')

const connection =mysql2.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password:'Mypass@24'
})

function getAllPersons () {
 return new Promise(function (resolve, reject) {
     connection.query(
         `SELECT * FROM persons`,
         function (err, rows, cols) {
             if (err) reject(err);
             else {
                 console.log(rows);
                resolve(rows);
            }
        }
    )
})}

// The method below can cause SQL injection ,
// for example : ; DROP TABLE persons; // This will delete our table through front end !!!

// function addNewPersons (data) {
    
//     return new Promise( function (resolve,reject){
//         let age = parseInt(data.age)
//         connection.query(
//            `INSERT INTO persons(name,age,city)  VALUES(
//             "${data.name}",
//             ${age},
//             "${data.city}"
//             )`, function (err, results){
//                 if (err) reject(err);
//                 else {
//                     resolve(results);
//                 }
//             }
//         )
//     })
// }


// Concept of Sanitization -->
function addNewPersons (data) {
    
    return new Promise( function (resolve,reject){
        let age = parseInt(data.age)
        connection.query(
           `INSERT INTO persons(name,age,city)  VALUES(?, ?, ?)`,
           [data.name, age, data.city], 
            function (err, results){
                if (err) reject(err);
                else {
                    resolve();
                }
            }
        )
    })
}


module.exports = {
    getAllPersons, addNewPersons
}