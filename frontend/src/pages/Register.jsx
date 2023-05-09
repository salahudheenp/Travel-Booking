import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import loginImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from '../utils/config'

const Register = () => {

  const [credentials, setCredentials] = useState({
    name: undefined,
    email: undefined,
    phone: undefined,
    password: undefined
  })

  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()


  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${BASE_URL}/users/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })


      const result = await res.json()

      if (!res.ok) alert(result.message)

      dispatch({ type: "REGISTER_SUCCESS" })
      navigate('/login')

    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto ">
            <div className="login__container d-flex justify-content -between ">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>


              <div className="login_form">
                <div className="user" >
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</ h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder="Name" required id="name"
                      onChange={handleChange} />
                  </ FormGroup>
                  <FormGroup>
                    < input type="phone" placeholder="Phone" required id="phone"
                      onChange={handleChange} />
                  </ FormGroup>
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email"
                      onChange={handleChange} />
                  </ FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required
                      id="password" onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary_btn auth_btn" type="submit"> Login</ Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></ p>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  )



}
export default Register;