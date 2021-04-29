const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = `mongodb://localhost:27017`;
const DB_Name = 'tododb';
// async function

async function readTask() {
    const client = await MongoClient.connect(MONGO_URL);
    const tododb = client.db(DB_Name);

    const todos = tododb.collection('todos')
    // Mongodb Operators -->
// todos.find({}) // return cursor : file pointer (sort of thing)
//    const todoArr = await todos.find({priority:1}).toArray()   // priorty = 1 objects only
//     const todoArr = await  todos.find({priority: {$gt:1}}).toArray() // priority greater than 1
//     const todoArr = await  todos.find({priority: {$exists:false}}).toArray()

    // const todoArr = await todos.find({
    //     $and: [
    //         {priority: {$gt:1}},
    //         {priority: {$lt:3}},
    //         {owner: 'manager'}
    //     ]
    // }).toArray()

    // const todoArr = await todos.find({}).sort({priority :1}).toArray() // Ascending order
    const todoArr = await todos.find({priority: {$exists: true}}).sort({priority :-1}).toArray() // descending order
    todoArr.forEach((todo) => console.log(JSON.stringify(todo)))


}

readTask();