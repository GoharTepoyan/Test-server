// import { data } from "./index1.js"; 

// export const getAdmin1 = function (req, res, next) {

//     let checkAdmin=data.filter(element=>element.userType==='admin' && element.id==req.query.id)

//     if (checkAdmin[0]) {
//          next()
//      }else{
//          res.send
//      }

//  } 


//  export const isAdmin1 =(req, res, next)=>{
//     const {userType} = req.body

//     if(userType !== 'admin'){
//         res.send({'message':'You do not have an access'})
//     }
//     next()

//  }
 

//  export const getModerator1 = function (req, res, next) {

//         let checkModerator=data.filter(element=>element.userType==='moderator' && element.id==req.query.id)
    
//         if (checkModerator[0]) {
//              next()
//          }else{
//              res.send({'message':'You do not have an access'})
//          }
   
//     }
   