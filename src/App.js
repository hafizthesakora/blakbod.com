import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Solutions from './components/pages/Solutions';
import AboutUs from './components/pages/AboutUs';
import MissionV from './components/pages/MissionV';
import CoreValues from './components/pages/CoreValues';
import Career from './components/pages/Career';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/mission-vision" element={<MissionV />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// This project was designed, engineered and developed by Hafiz Toyyib, (MERN full stack developer).
