import express from 'express'
import { verifyAdmin, verifyUser } from '../utils/verifyToken'
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController'


const router = express.Router()

router.post('/', createBooking)
router.get('/:id', verifyUser, getBooking)


router.get('/', verifyAdmin, getAllBooking)




export default router











