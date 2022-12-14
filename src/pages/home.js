import React from 'react'
import { useState } from 'react';

import HeroSection from '../../src/components/Hero-section/hero-section';
import Navbar from '../../src/components/Navbar/index';
import Sidebar from '../../src/components/Sidebar/index';
import Card from '../../src/components/Home-card/home-card';

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