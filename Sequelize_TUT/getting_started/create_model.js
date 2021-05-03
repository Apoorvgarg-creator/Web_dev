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
const task = async () => {
    try {
        await db.sync({alter:true})

        // Insert a student
        // await Student.create({
        //     name : 'Apoorv',
        //     age: 19
        // })
        for( let i =0;i<30;i++) {
            await Student.create({
                name: (['Apoorv', 'luffy', 'zoro', 'nami', 'ussop', 'sanji', 'franky', 'robin','law','shanks'])[parseInt(Math.random() * 10)],
                age: 10 + parseInt(Math.random() * 10)
            })
        }
    }catch (e){
        console.error(e)
    }
}

task();
// alter the current table
// db.sync({alter:true})
//     .then(() => console.log('Database synchronized'))
//     .catch((err) => console.error(err))


// Drop the table create new tables: can cause loss of data
// db.sync({force:true})
//     .then(() => console.log('Database synchronized'))
//     .catch((err) => console.error(err))