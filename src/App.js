import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicExample from './componentes/navbar.js';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <BasicExample/>
      <header className="hero">

        <div className="hero-content">
          <h1>React landingpage</h1>
          <p className="subtitle">A simple starter landing page built with React.</p>
          <a className="cta" href="#contact">Get started</a>
        </div>
      </header>

      <main>
    
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} React landingpage</p>
      </footer>
    </div>
  );
}

export default App; 
