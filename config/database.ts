 import {Client} from 'pg';
 const conn=new Client({
    host:"localhost",
    port:4000,
    user:"postgres",
    password:"pass",
    database:"demo"
})

conn.connect();
export default conn;