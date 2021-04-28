const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = `mongodb://localhost:27017`;
const DB_Name = 'FirstProject';
// async iife
(async () => {
   const client = await MongoClient.connect(MONGO_URL)
   const FirstProject = client.db(DB_Name);

   console.log(FirstProject);
})();