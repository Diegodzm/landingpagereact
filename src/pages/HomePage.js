import React from 'react';
import '../App.css';

function HomePage() {
  return (
    <div className="page-container">
      <header className="hero">
        <div className="hero-content">
          <h1>React landingpage</h1>
          <p className="subtitle">A simple starter landing page built with React.</p>
          <a className="cta" href="#contact">Get started</a>
        </div>
      </header>

      <footer className="footer">
        <p>&copy; 2024 React landingpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
