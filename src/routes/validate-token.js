import {Request,Response,NextFunction} from 'express'
import jtw from 'jsonwebtoken'
import 'dotenv/config';

const validateToken = (req,res,NextFunction) =>{
    const headerToken = req.headers.authorization
    //console.log(headerToken)
    if(headerToken != undefined && headerToken.startsWith('Bearer')){
        //Tiene Token
        const bearerToken = headerToken.slice(7);

        try{
            const tokenValido = jtw.verify(bearerToken, process.env.SECRET_KEY||'wer')
            console.log(tokenValido)
            NextFunction();
        }catch(error){
            res.status(400).json({
                error: 'token no valido'
            })
        }

        
    } else{
        res.status(400).json({
            error: 'Acceso denegado'
        })
    }

    
}

export default validateToken;