const mysql = require('mysql2')

const Insert = {
    name : process.argv[2],
    age : parseInt(process.argv[3]),
    city : process.argv[4]
}

// console.log(connection);
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user:'myuser',
    password:'Mypass@24'
})


connection.query(
    `INSERT INTO persons(name,age,city) VALUES (
        '${Insert.name}',
        ${Insert.age},
        '${Insert.city}'
    )`,
    function(err, results){
        if(err) console.error(err);
        else {console.log(results);
            console.log('Data inserted successfully');
        }
        connection.close();
    }
)