import express from 'express';
import userService from "./user.service";
import updateUsers from "./user.service";
import conn from "../config/database";
import { QueryResult } from 'pg';
// const userController={};

export default class userController{
    public static createUser(req:express.Request,res:express.Response){
     
            const body:any=req.body;
            conn.query("select * from demo where name=$1",
                     [body.name],
                     (err: Error,result:QueryResult<any>)=>{
                         if(err){
                             throw err;
                         }
                         console.log(result.rows);
                         if(result.rows.length>0){
                            return res.status(500).json({
                                sucess:0,
                                message:"User already exist"
                            });
                         }
                         else{
                            return userService.create(body,(err:any,result:any)=>{
                                if(err){
                                    console.log(err);
                                    return res.status(500).json({
                                        sucess:0,
                                        message:"database connection error"
                                    });
                                }
                                return res.status(200).json({
                                    sucess:1,
                                    message:result
                                })
                              });
                         }
                     });
    }
    
    public static updateUser (req: express.Request,res: express.Response){
     
        const body=req.body;
      return userService.updateUsers(body,(err: Error,result:any)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                sucess:0,
                message:"database connection error"
            });
        }
        console.log('hi');
        return res.status(200).json({
            sucess:1,
            message:result,
            ans:body
        })
      });
    }
}    
//     },
//     userController.getUser = async(req,res)=>{
     
//       const body=req.body;
//     return userService.getUsers((err,result)=>{
//       if(err){
//           console.log(err);
//           return res.status(500).json({
//               sucess:0,
//               message:"database connection error"
//           });
//       }
//       return res.status(200).json({
//           sucess:1,
//           message:result,
//           ans:body
//       })
//     });
//   },
 
// userController.deleteUser = async(req,res)=>{
     
//   const body=req.body;
// return userService.deleteUser(body,(err,result)=>{
//   if(err){
//       console.log(err);
//       return res.status(500).json({
//           sucess:0,
//           message:"database connection error"
//       });
//   }
//   return res.status(200).json({
//       sucess:1,
//       message:result,
//       ans:body
//   })
// });
// }

// userController.createTable=async(req,res)=>{
//   const body=req.body;
//   return userService.createTable(body,(err,result)=>{
//     if(err){
//       return res.status(500).json({
//         sucess:0,
//         message:"could not create table"
//       });
//     }
//     return res.status(200).json({
//       sucess:1,
//       message:result
//     })
//   });
// }
// export default userController;