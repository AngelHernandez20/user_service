import { Router } from 'express';
import * as loginCtrl from '../controllers/auth.controller'
const router = Router()

router.post('/login',loginCtrl.loginUser2)
router.post('/signin')

export default router;