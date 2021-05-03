const {db, Student} = require('./model')

const task = async () => {
    try {
        await db.sync()

        // const students = await Student.findAll()
        // const students = await Student.findAll({
        //     where : [`age` , {$gt: 15}],
        //     order : [
        //         ['age','DESC'],
        // ['name','ASC']
        //     ]
        // })
        const students = await Student.findAll({
            where : {
                age: {
                    $or: {
                        $lt:12,
                        $gt:8
                    }
                }
            },
            order : [
                ['age','DESC'],
                ['name','ASC']
            ]
        })

        // console.log(students)
        // students.forEach(student => console.log(student.dataValues))
        console.log(`Name \t Age`);
        students.forEach(student => console.log(`${student.dataValues.name} \t ${student.dataValues.age}`));

    }
    catch (e){
        console.error(e)
    }
}

task();