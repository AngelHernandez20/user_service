import mysql from 'mysql';
import * as dao from '../DAO/auth.js'
import bcrypt from 'bcrypt'
import  Jwt  from 'jsonwebtoken';
import 'dotenv/config';
import { token } from 'morgan';

export const loginUser = async(req, res) => {

    console.log("Si entra")
    
    const user = {
        correo : req.body.correo,
        //password : req.body.password,
    }

    console.log(user)
    dao.loginUserDAO(user,(data)=>{
        res.send({
            status: true,
            message: 'Datos no encontrados',
            data: data
        })
   
    },err =>{
        res.send({
            status: false,
            message: 'error',
            data: err
        })
    }
    )
    
}

export const loginUser2 = async(req, res) => {
    const user = {
        correo:req.body.correo,
        password:req.body.password
    } 
    console.log(user)
    dao.login2(user,(data)=>{
        if(data.length == 0){
            res.json({
                status:"error",
                token:"",
                data:""
            })
        }
        if(data.length>0){
            const userPassword = data[0].password;
            console.log(userPassword)
            //comparar la contraseña
            console.log(user.password)
            bcrypt.compare(user.password,userPassword).then((result)=>{
                if(result==true){
                    //Login correcto, se génera el token
                    console.log("Llave ",process.env.SECRET_KEY)
                   
                    const token = Jwt.sign({
                        correo:req.body.correo,
                        rol: 'Ususario'
                    },process.env.SECRET_KEY||'wer',{
                        //expiresIn:'10000'
                    })
                     
                    console.log("Login correcto",result)
                    res.json({
                        status:"correcto",
                        token:token,
                        data:data
                    })
                    
                }else{
                    //Password Incorrecta
                   res.json({
                        status:"error",
                        token:"",
                        data:""
                   })
                }
            
            })
        }

        
   
    },err =>{
        res.send({
            status: false,
            message: 'error',
            data: err
        })
    }
    )
}