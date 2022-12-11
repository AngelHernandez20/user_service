import mysql from 'mysql';
import * as dao from '../DAO/cliente.js'
import bcrypt from 'bcrypt'

export const getUsers =async (req, res) => {

    await dao.getAllUsersDAO((Callback)=>{
        try {
            if (!Callback) throw new Err("Error")
            res.send({
                status: true,
                message: 'Se ha obtenido todos los usuarios exitosamente',
                data: Callback
            })
            
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido obtener los usuarios'

            })   
        }
    })    
};
export const validarUsers =async (req, res) => {
    console.log(req.params.correo)
    await dao.clienteDAO(req.params.correo,(Callback)=>{
        try {
            if (!Callback) throw new Err("Error")
            res.send({
                status: true,
                message: 'Se ha obtenido todos los usuarios exitosamente',
                data: Callback
            })
            
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido obtener los usuarios'

            })   
        }
    })    
};



export const postUsers = async (req, res) => {
    console.log("Si entraa")
    const user = {
        correo: req.body.correo,
        username : req.body.username,
        password : req.body.password
    }
    const hashedPassword = await bcrypt.hash(user.password,10);

    const user2 = {
        correo : req.body.correo,
        username : req.body.username,
        password : hashedPassword
    }

    console.log(user2)
    dao.postUsersDAO(user2,(data)=>{
        res.send({
            status: true,
            message: 'Se creado exitosamente el usuario',
            data: data
        })
   
    },err =>{
        res.send({
            status: false,
            message: 'error en la creación del usuario',
            data: err
        })
    }
    )
};

export const deleteUser = async(req, res) => {
    console.log("Si entra")
    await dao.deleteUsersDAO(req.params.idusers,(data) => {
        try {
            if (!data) throw new Err("Error")
            res.send({
                status: true,
                message: 'Usuario eliminado exitosamente',
                data: data
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido eliminar el usuario',
                data: null
            })
        }
    })
};



export const getProductById =(req,res)=>{
    
}

export const updateUser= (req,res)=>{
    const user = {
        correo : req.body.correo,
        username : req.body.username,
        password : req.body.password
    }
    
    dao.updateUserDAO(user, req.params.idusers,(data)=> {
        try {
            if (!data) throw new Err("Error")
            res.send({
                status: true,
                message: 'Usuario editado exitosamente',
                data: data
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido editar el usuario',
                data: null
            })
        }
        
       
    })
}



