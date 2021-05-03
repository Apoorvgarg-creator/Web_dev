const Sequelize = require('sequelize')
const  db = new Sequelize('sampledb1','sampleuser1','SamplePass@1',{
    host: `localhost`,
    dialect: `mysql`
})

db.authenticate().then(() => {
    console.log("Connection successful !");
}).catch((err) => {
    console.error(err);
})