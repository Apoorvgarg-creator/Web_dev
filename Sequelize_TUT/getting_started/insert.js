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
    }catch (e){
        console.error(e)
    }
}

task();
