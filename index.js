import express from "express";
const app = express()

app.use(express.json());
import {getData, createData} from "./storages/mongo.js";

export const data = getData() 
// export const creData = createData()
// console.log(data);

import router from './routes1.js';


// const users = await getUsers()

// export const users2 = JSON.parse(fs.readFileSync('./users.json', 'utf-8'))

app.use('/', router)




app.listen(3000, ()=>{
    console.log("Server is working on port 3000");
})