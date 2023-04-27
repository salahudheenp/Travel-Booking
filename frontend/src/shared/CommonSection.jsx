
import React from 'react'
import './commonSection.css'


import { Container, Row, Col } from 'reactstrap'

const CommonSection = ({ title }) => {
    return (
        <section className="commen__section">
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>

    )

}

export default CommonSection
