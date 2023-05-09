import Booking from '../models/Booking'


// create new booking
export const createBooking = async (req, res) => {
    console.log(req.body, 'bodyyyyyyyy');
    const newBooking = new Booking(req.body)

    try {
        const savedBooking = await newBooking.save()

        res.status(200).json({
            success: true,
            message: 'Your tour is booked',
            data: savedBooking
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error'
        })
    }
}



// get single booking
export const getBooking = async (req, res) => {
    const id = req.params.id

    try {

        const book = await Booking.findById(id)

        res.status(200).json({
            success: true,
            message: 'successful',
            data: book
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'not found'
        })

    }
}



// get all booking
export const getAllBooking = async (req, res) => {

    try {
        const bookings = await Booking.find()

        res.status(200).json({
            success: true,
            message: 'successful',
            data: bookings
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'not found'
        })

    }
}