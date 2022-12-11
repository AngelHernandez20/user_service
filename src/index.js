//import {app} from './app';
import app from './app.js'
//import './database'
//import 'dotenv/config';

app.listen(process.env.PORT);
console.log("Server Funcionando",process.env.PORT)

