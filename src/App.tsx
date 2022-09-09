import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Games from './Pages/Games';
import Nav from './Molecules/Nav/Nav';
import Footer from './Atoms/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
