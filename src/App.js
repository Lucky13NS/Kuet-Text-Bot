import React from 'react';
import HomePage from './pages/home';
import AboutUs from './pages/about_us'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import './App.css';


function App(){
        return(
            <Router>
                <Routes>
                <Route exact path="/" element={<HomePage/>} />
                </Routes>
                <Routes>
                <Route path="/home" element={<HomePage/>} />
                </Routes>
                <Routes>
                <Route path="/aboutUs" element={<AboutUs/>} />
                </Routes>

            </Router>

        )
    
}

export default App;