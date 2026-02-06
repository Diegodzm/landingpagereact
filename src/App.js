import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarReact from './componentes/navbar.js';
import HomePage from './pages/HomePage';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const MainLanding = () => (
    <div className="App">
      <main className="hero">
        <div className="hero-content">
          <h1>React landingpage</h1>
          <p className="subtitle">A simple starter landing page built with React.</p>
          <a className="cta" href="#contact">Get started</a>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} React landingpage</p>
        <p className="footer-credit">Made by Diego Diaz</p>
      </footer>
    </div>
  );

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarReact />
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 
