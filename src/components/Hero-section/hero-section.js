import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Container, Row, Col }from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

//Elements import
import Icon_img from '../../images/Picture1.png';
import Image from '../../images/Hero-Banner.png';
import '../Hero-section/hero-sectionElements.css';

const heroSection= () => {
  return (
//     <div>
// <img src={Image} className='heroImage' alt="HeroImage"/>
//     </div>
    <section className='banner' id='home' >

      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <div className=' text '>
            <span className='tagline'>
              KUET <span className='TEX'>TEX</span><span className='BOT'>BOT</span>
            </span>
            <h2>WE HELP YOU EXPLORE</h2>
            <h2>THE <span className='academic'>ACADEMIC RESOURCES</span></h2>
            <button onClick={() => console.log('connect')}>MORE ABOUT US</button>
            </div>

          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={Icon_img} alt="Headder img" />
          </Col>
        </Row>
      </Container>

    </section>



  )
}

export default heroSection;


