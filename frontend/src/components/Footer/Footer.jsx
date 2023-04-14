import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'

  },
  {
    path: '/tours',
    display: 'Tours'
  }
]

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'

  },
  {
    path: '/register',
    display: 'Register'
  }
]
const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'></Col>

      </Row>
    </Container>
  </footer>


}

export default Footer
