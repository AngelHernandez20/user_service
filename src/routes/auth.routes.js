import { Router } from 'express';
import * as loginCtrl from '../controllers/auth.controller.js'
const router = Router()

router.post('/login',loginCtrl.loginUser2)
router.post('/signin')

export default router;