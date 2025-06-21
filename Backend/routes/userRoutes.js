import express from 'express'
import { registeruser, loginUser, userCredits, resetPassword } from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registeruser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', userAuth , userCredits)
userRouter.post('/reset-password', resetPassword);

export default userRouter



// https://localhost:4000/api/user/register
// https://localhost:4000/api/user/login