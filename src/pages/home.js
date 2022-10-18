import React from 'react'
import { useState } from 'react';


import Tailwind from '../../src/components/Tailwind-section/index'
import HeroSection from '../../src/components/Hero-section/hero-section';
import Navbar from '../../src/components/Navbar/index';
import Sidebar from '../../src/components/Sidebar/index';
import './home.css';
import Card from '../../src/components/Home-card/home-card';
import Clock from '../../src/components/Clock/Clock';


  const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div>
                <HeroSection />
            </div>
            <div>
                <Card />
            </div>











        </>

    )
}

export default Home;