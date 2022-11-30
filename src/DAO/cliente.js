import conn from "../database"
import bcrypt from 'bcrypt'

module.exports = {
    getAllProductssDAO: (callback) => {
        let sql = 'SELECT * FROM clientes'
        conn.query(sql, (err, data) => {
            if (err) throw err
            console.log(err)

            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    },
    clienteDAO: ( email ,callback) => {
        let sql = 'SELECT * FROM clientes WHERE email =?'
        conn.query(sql,email, (err, data) => {
            if (err) throw err
            console.log(err)

            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    },

    postUsersDAO:(user2,callback) => {
        let sql = 'INSERT INTO clientes set ?'
        conn.query(sql,user2,(err, data) => {
            if(err)
                return null
            else
                callback(data)    
        })
    },

    deleteUsersDAO: (idusers, callback) => {
        console.log("Metodo dao para eliminar")
        let sql = 'DELETE FROM clientes WHERE idclientes = ?'
        conn.query(sql, idusers, (err, data) => {
            console.log(err);
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },

    updateUserDAO:(user,idclientes,callback)=>{
        console.log("Metodo UpdateDAO")
        let sql = 'UPDATE clientes SET ? WHERE idclientes= ?'
        conn.query(sql, [user, idclientes], function (err, data) {
            if (err) throw err;
            return callback(data);
        });
    },
    
}    