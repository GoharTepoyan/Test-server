import { data } from "./index1.js";

// import { getAdmin1, getModerator1, isAdmin1 } from "./midlewares1.js";

import {getData, createData} from "./storages/mongo.js";



export async function users (req, res) {
    try {
       res.status(200).send({info: await data})
        
    } catch (error) {
        res.status(404).send({message: "Something went wrong"})
    }
    
}

// export const getAdmins = (req, res)=>{
//     try {
//         const moderator = () => {
//             const mod = [];
//             for (let i = 0; i < data.length; i++) {
//                 if (data[i].userType == "moderator") {
//                     mod.push(data[i].name)
//                 }
//             }
//             return mod
//         }
//        res.send(moderator() )
//     } catch (error) {
//         console.log(error);
//     }
  
// }



// export const addUser = (req, res) => { 
//    try{
//     const {id, name, surname, userType}= req.body
//     data.push(req.body)
//     fs.writeFileSync('users.json', JSON.stringify(data))
//     res.send({'message': 'user is created'})
//    } catch (error) {
//     console.log(error);
// }
    
// }

export async function register (req, res) {
try {
    const {username, email, userType} = req.body
    const response = await createData (req.body)
    
    res.status(202).send([{info: response}, {'message': 'Successfully registered'}])
} catch (e) {
    res.status(404).send({info: e}, )
}  

}


