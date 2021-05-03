const {db, Student} = require('./model')
// Insert
const task = async () => {
    try {
        await db.sync({alter:true})

        // Insert a student
        // await Student.create({
        //     name : 'Apoorv',
        //     age: 19
        // })
        await Student.create({
            name : (['Apoorv','luffy','zoro','nami','ussop','sanji','franky','robin']),
            age: 10
        })
    }catch (e){
        console.error(e)
    }
}

task();
