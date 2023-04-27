import React, { useState } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'


const Booking = ({ tour, avgRating }) => {

    const { price, reviews } = tour

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'exam@asd',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    // send data to server
    const handleClick = (e) => {
        e.preventDefault()

        console.log(credentials);
        navigate('/thank-you')
    }

    return (
        <div className='booking'>
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price}
                    <span>/per person</span>
                </h3>

                <span className="tour__rating d-flex align-items-center gap-1">
                    <i className="ri-star-s-fill" style={{ color: "var(--secondary-color) " }}></i>
                    {avgRating === 0 ? null : avgRating}
                    ({reviews?.length})



                </span>

            </div>

            {/*========booking__form  ==============*/}

            <div className="booking__form">

                <h5>Information</h5>
                <Form className='booking__info'>
                    <FormGroup>
                        <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='number' placeholder='Phone' id='phone' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex  align-items-center gap-3'>
                        <input type='text' placeholder='' id='bookAt' required onChange={handleChange} />
                        <input type='text' placeholder='Guest' id='guestSize' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            {/*=========================booking__form end====== ==============*/}


            {/*=========================booking__form bottom====== ==============*/}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5>${price} <i className="ri-close-line"></i> 1 person </h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>service charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>total</h5>
                        <span>$ {totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
            </div>
            {/*=========================booking__form bottom end ====== ==============*/}



        </div>
    )
}

export default Booking