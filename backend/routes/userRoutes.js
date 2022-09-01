import express from 'express'
import { authUser, forgotpassword, getUserProfile, registerUser, resetpassword, updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'


const router = express.Router()

router.post('/login', authUser)
router.post('/forgotpassword', forgotpassword)
router.post('/resetpassword', resetpassword)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/').post(registerUser)

export default router