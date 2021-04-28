const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = `mongodb://localhost:27017`;
const DB_Name = 'tododb';
// async function

async function writeTask() {
    const client = await MongoClient.connect(MONGO_URL);
    const tododb = client.db(DB_Name);

    const todos = tododb.collection('todos')
    const todo = {
        task:'an important task',
        priority:2,
        owner:'manager'
    }
    const result = await todos.insertOne(todo)
    console.log(result)
}

async function writeTasks () {
    const client = await MongoClient.connect(MONGO_URL);
    const tododb = client.db(DB_Name);

    const todos = tododb.collection('todos')
    const result = await todos.insertMany([
        {task:'another task', owner:'security'},
        {task:'more tasks', owner:'CEO'},
        {task:'some another task', priority:3},
        {task:'some task that will happen later', priority:2, owner:'executive'}
    ])
    console.log(result)
}

writeTasks();