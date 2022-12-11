import express, { json } from 'express'
import morgan from 'morgan';
//import pkg from '../package.json'
import usersRoutes from './routes/cliente.routes.js'
import authRoutes from './routes/auth.routes.js'
import 'dotenv/config';
import pkg from "../package.json" assert { type: "json" };
const app = express()

app.set('pkg', pkg);


app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req,res)=>{
    res.send("Servicio corriendo perfectamente")
})


app.use('/users',usersRoutes)
app.use('/auth',authRoutes)

export default app;

