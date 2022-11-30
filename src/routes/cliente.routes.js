import { Router } from 'express';
import * as usersCtrl from '../controllers/clientes.controller'
const router = Router()

//Crear
router.post('/addUser',usersCtrl.postUsers)
router.get('/validad/:email',usersCtrl.validarUsers)
//Delete
router.post('/deleteUser/:idusers',usersCtrl.deleteUser)
//Uodate
router.post('/updateUser/:idusers',usersCtrl.updateUser);

export default router;