import { QueryResult } from "pg";
import conn from "../config/database";
 
export default class userService{
    public static create(data:any,callBack:Function):any{
        conn.query(`insert into demo(name,email) values($1,$2)`,
        [
            data.name,
            data.email
        ],
        (err:Error | null,result:any)=>{
            if(err)
            {
               return callBack(err);
            }
            return callBack(null,result);
        });
    }

    public static updateUsers(data:any,callBack:Function){
            conn.query(`select demo_id from demo where demo_id= $1`,
            [
                data.demo_id
            ],
            (err:Error | null,result: QueryResult<any>)=>{
                if(result.rows.length != 0){
                    conn.query(`update demo set name=$1 where demo_id=$2`,
                    [
                        data.name,
                        data.demo_id 
                    ],
                    (err:Error | null,result:any)=>{
                        if(err){
                            throw err;
                        }
                        else{
                            return result;
                        }
                    });
                }
                else if(err){
                    throw err;
                }
            });
    }
    
}
// },
//    userService.getUsers=callBack=>{
//         conn.query(`select * from data`,
//         [],
//         (err,result,fields)=>{
//             if(err){
//                 return callBack(err);
//             }
//             return callBack(null,result);
//         });
//    },
  
//    userService.deleteUser=(data,callBack)=>{
//     conn.query(`delete from data where id=?`,
//     [
//         data.id
//     ],
//     (err,result,fields)=>{
//         if(err){
//             return callBack(err);
//         }
//         return callBack(null,result);
//     })

//    },
//    userService.createTable=(data,callBack)=>{
//     conn.query(`create table students1 (name varchar(25) , mark int(3))`,
//     [],
//     (err,result,fields)=>{
//         if(err){
//             return callBack(err);
//         }
//         return callBack(null,result);
//     })
//    }

//     export default userService;