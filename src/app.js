import express, { json } from 'express'
import morgan from 'morgan';
import pkg from '../package.json'
import usersRoutes from './routes/cliente.routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.set('pkg', pkg);


app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req,res)=>{
    res.json({
        name: app.get('name').name,
        author: app.get('pkg').author,
        description: app.get('description').description,
        version: app-get('version').version
    })
})


app.use('/cliente',usersRoutes)
app.use('/auth',authRoutes)

export default app;

