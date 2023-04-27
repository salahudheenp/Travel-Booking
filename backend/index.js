import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'


import tourRoute from './routes/tour.js'
import userRoute from './routes/users.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/booking.js'



dotenv.config()
const app = express()
const port = process.env.PORT || 5000
const coresOptions = {
    origin: true,
    credentials: true
}


// database connection 
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB database connected');
    } catch (error) {
        console.log('db connection failed', error);
    }
}

// middleware
app.use(express.json())
app.use(cors(coresOptions))
app.use(cookieParser())
app.use(express.urlencoded({
    extended: true
}))

app.use('api/v1/tours', tourRoute)
app.use('api/v1/users', userRoute)
app.use('api/v1/reviews', reviewRoute)
app.use('api/v1/booking', bookingRoute)



app.listen(port, () => {
    connect()
    console.log('server running on port', port);
})


