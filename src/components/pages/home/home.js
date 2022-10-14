import React from 'react'
import { useState } from 'react';
import HeroSection from '../../Hero-section/hero-section';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import './home.css';
import Card from '../../Home-card/home-card';
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

            <div className='watch'>

                <div id="time">
                    <div className='circle'>
                        <div className='dots sec_dot'></div>
                        <svg>
                            <circle cx="120" cy="120" r="120" id="ss" className='c1'></circle>
                        </svg>
                    </div>

                    <div className='circle' >
                        <div className='dots min_dot'></div>
                        <svg>
                            <circle cx="100" cy="100" r="100" id="mm" className='c2'></circle>
                        </svg>
                    </div>

                    <div className='circle'>
                        <div className='dots hr_dot'></div>
                        <svg>
                            <circle cx="80" cy="80" r="80" id="hh" className='c3'></circle>
                        </svg>
                    </div>






                </div>

            </div>




                <div className='green-img'>
                </div>

            </div>

        </>
    )
}

export default Home;