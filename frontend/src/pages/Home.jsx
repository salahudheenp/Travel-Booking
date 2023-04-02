import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import SearchBar from '../shared/SearchBar'
import ServicesList from '../services/ServicesList'
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList"

const home = () => {
  return <>

  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle Subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Traveling opens the door to creating
              <span className='highlight'>memories</span>
            </h1>
              <p>Travelling may mean many things for many people. If we open up dictionaries, they give many meanings of travelling. Someone may be on a trip or journey. For another group, travelling may mean going from one place to another as a travel agent, salesman, for business purpose, or studies. Light also travels from one object to another. Again, in some games like basketball, breaking a certain rule may mean travelling.</p>
          </div>

        </Col>

        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>

          <SearchBar />
      </Row>
    </Container>
  </section>
    {/*===========hero Section start===========   */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>What we serve</h5>
            <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServicesList />
        </Row>
      </Container>
    </section>

    {/*===========hero Section end===========   */}

    {/*============featured tour section start============*/}
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className='featured__tour__title'>Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>


    {/*============featured tour section end============*/}


    {/*============experience section start===================*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experince__content">
              <Subtitle subtitle={'Experience'} />

              <h2>With our all experience <br /> we will serve you</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Ullam libero veniam laborum iure nobis</p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12 k +</span>
                <h6>Successfull Trips</h6>
              </div>
              <div className="counter__box">
                <span>2 k +</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience </h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experienceImg">
              <img src={experienceImg} alt="" />
            </div>

          </Col>
        </Row>
      </Container>
    </section>

    {/*============experience section end===================++*/}


  </>
    
      
    
  
}

export default home
