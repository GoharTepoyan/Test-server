import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://gogtepoyan:pushkin75!@cluster0.kh9zplz.mongodb.net/';

const client = new MongoClient(url);

const dbName="todo2024-v-01"


async function connectToMongo () {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        return client.db(dbName)
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        throw error;
    }
    
      
  }
  
export async function getData () {

    try {
        const data=await connectToMongo();
        const collection = data.collection('todoV.0.1');
        return await collection.find({}).toArray();
    } catch (e) {
        console.log(e.message);
        throw new Error (e.message)
    }
   
}


export async function createData (user) {
    try {
        const data=await connectToMongo();
        const collection = data.collection('todoV.0.1');
        await collection.insertOne(user);
        return user;

    } catch (e) {
        console.log(e.message);
        throw new Error (e.message)
    }
}