const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
const  db = new Sequelize('sampledb1','sampleuser1','SamplePass@1',{
    host: `localhost`,
    dialect: `mysql`
})
const Student = db.define('student',{
    name: {
        type:DataTypes.STRING(40),
        allowNull: false
    },
    age: {
        type:DataTypes.INTEGER(2),
        allowNull: true,
        defaultValue: -1
    }
})

module.exports = {
    db, Student
}