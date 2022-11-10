import React from 'react'
import { useState } from 'react';


import HeroSection from '../../src/components/Hero-section/hero-section';
import Navbar from '../../src/components/Navbar/index';
import Sidebar from '../../src/components/Sidebar/index';
import AboutUsCard from '../components/AboutUs-card/card'

const About_us = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutUsCard />



        </>

    )
}

export default About_us;