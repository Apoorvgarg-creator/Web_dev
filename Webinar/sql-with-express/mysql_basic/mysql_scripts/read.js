const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user:'myuser',
    password:'Mypass@24'
})

connection.query(
    `SELECT * FROM persons`,
    function(err,rows,fields){  // fields is the column 
        if(err) console.error(err);
        else{
            console.log(rows[0].id);
            console.log(fields);
        }
        connection.close()
    }
)