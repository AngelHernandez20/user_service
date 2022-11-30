import mysql from 'mysql';
import dao from '../DAO/cliente'
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
    console.log(req.params.email)
    await dao.clienteDAO(req.params.email,(Callback)=>{
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
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }
    const hashedPassword = await bcrypt.hash(user.password,10);

    const user2 = {
        name : req.body.name,
        email : req.body.email,
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
        name : req.body.name,
        email : req.body.email,
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



