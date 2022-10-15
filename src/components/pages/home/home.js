import React from 'react'
import { useState } from 'react';
import HeroSection from '../../Hero-section/hero-section';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import './home.css';
import Card from '../../Home-card/home-card';
import Clock from '../../Clock/Clock';
  const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />

            <div className='Bg'>

                <Card />

                <Clock />


                <div className='green-img'>
                </div>

            </div>

        </>

    )
}

export default Home;