import express from 'express'

import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController'
import { login, register } from '../controllers/authController'
import { verifyUser } from '../utils/verifyToken'
const router = express.Router()


//  user register
router.post('/register', register)

//  user login
router.post('/login', login)


// update User
router.put('/:id', updateUser)

// delete User
router.delete('/:id', deleteUser)

// get single User
router.get('/:id', verifyUser, getSingleUser)

// get all User
router.get('/', getAllUser)


export default router