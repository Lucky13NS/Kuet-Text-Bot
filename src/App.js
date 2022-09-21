import React from 'react';
import Navbar from './/components/Navbar/index';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Hero_section from './components/pages/hero-section';


function App(){

        return(
            <Router>
                <Navbar />
                <Routes>
                <Route exact path="/" element={<Hero_section/>} />
                </Routes>
                <Routes>
                <Route path="/home" element={<Hero_section/>} />
                </Routes>
            </Router>
        )
    
}

export default App;