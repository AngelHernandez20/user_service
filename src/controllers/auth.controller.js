import mysql from 'mysql';
import dao from '../DAO/auth'
import bcrypt from 'bcrypt'
import  Jwt  from 'jsonwebtoken';
import 'dotenv/config';

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
        email:req.body.email,
        password:req.body.password
    } 
    console.log(user)
    dao.login2(user,(data)=>{
        if(data.length == 0){
            res.json({
                msg:'No existe el correo en la db'
            })
        }else{

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
                    console.log(token)
                }else{
                    //Password Incorrecta
                    console.log("Password Incorrecta")
                   
                }
            
            })

            res.send({
                status: true,
                message: 'Datos encontrados',
                data: data
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