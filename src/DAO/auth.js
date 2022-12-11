import conn from "../database.js"
import bcrypt from 'bcrypt'



   loginUserDAO: (user, callback) => {
    console.log("Metodo de login")
    let sql = 'SELECT * FROM users WHERE correo = ?'
    conn.query(sql, user, (err, data) => {
        console.log(err);
        if (err)
            return callback(null)
        else
            return callback(data)
    })
    };


    export function login2(user,callback){
        conn.query( 'SELECT * FROM users WHERE correo = ' + conn.escape(user.correo),(err, data)=>{
            if(err){
                //console.log(err)
                return callback(null)
            }else{
                //console.log(data)
                return callback(data)
            }
        })
    }
