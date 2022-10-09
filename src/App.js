import React from 'react';
import HomePage from './components/pages/home/home';
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
                <Route path="/Home" element={<HomePage/>} />
                </Routes>

            </Router>

        )
    
}

export default App;