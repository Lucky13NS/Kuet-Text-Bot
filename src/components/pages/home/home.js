import React from 'react'
import { useState } from 'react';
import HeroSection from '../../Hero-section/hero-section';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import './home.css';

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

                        {/* Card row-1 */}

                <div className='cardBg'>
                    <div className='haderTxt'>
                        ACADEMIC FILES
                    </div>
                        <section class='container'>

                        <a href='/home'>
                        <div class="card">

                                <div class="card-image card-1">
                                    <div class="card-text">
                                        SLIDES & BOOKS
                                    </div >
                                </div>
                            </div>

                        </a>

                        <a href='/home'>
                        <div class="card">
                                <div class="card-image card-2">
                                    <div class="card-text">
                                        NOTES
                                    </div>
                                </div>    
                            </div>
                        </a>

                        <a href='/home'>
                        <div class="card">
                                <div class="card-image card-3">
                                    <div class="card-text">
                                        RECENT DRIVES
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href='/home'>
                        <div class="card">
                                <div class="card-image card-4">
                                    <div class="card-text">
                                        OTHER DOCS
                                    </div>
                                </div>
                            </div>
                        </a>

                        </section>                     
                </div>

                        {/* Card row-2 */}

                <div className='cardBg'>
                    <div className='haderTxt'>
                        EXPLORE
                    </div>
                        <section class='container'>

                        <a href='/home'>
                            <div class="card">
                                <div class="card-image card-5">
                                
                                    <div class="card-text">
                                        SLIDES & BOOKS
                                    </div >
                                </div>
                            </div>
                         </a>   

                        <a href='/home'>
                            <div class="card">
                                <div class="card-image card-6">
                                    <div class="card-text">
                                        NOTES
                                    </div>
                                </div>    
                            </div>
                        </a>

                        <a href='/home'>
                            <div class="card">
                                <div class="card-image card-7">
                                    <div class="card-text">
                                        RECENT DRIVES
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href='/home'>
                            <div class="card">
                                <div class="card-image card-8">
                                    <div class="card-text">
                                        OTHER DOCS
                                    </div>
                                </div>
                            </div>
                        </a>    
                        </section>                     
                </div>

                {/* End of card section */}


                <div className='green-img'>

                </div>

            </div>

        </>
    )
}

export default Home;