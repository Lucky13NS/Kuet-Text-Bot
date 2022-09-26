import React from 'react';
import Navbar from './/components/Navbar/index';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import HeroSection from './/components/Hero-section/hero-section';


function App(){

        return(
            <Router>
                <Navbar />
                <Routes>
                <Route exact path="/" element={<HeroSection/>} />
                </Routes>
                <Routes>
                <Route path="/home" element={<HeroSection/>} />
                </Routes>
            </Router>
        )
    
}

export default App;