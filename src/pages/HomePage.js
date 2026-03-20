import React from 'react';
import '../App.css';

function HomePage() {
  const title = "Landing page basico React";
  return (
    <div className="page-container">
      <header className="hero">
        <div className="hero-content">
          <h1 className="animated-title">
            {title.split('').map((char, index) => (
              <span key={index} className="letter" style={{ '--i': index }}>{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </h1>
          <p className="subtitle">estructura landing page React js, html ,css</p>
          <a className="cta" href="#imgdisplay">Visitar Sitio</a>
        </div>
      </header>

      <footer className="footer">
        <p>&copy; 2026 React landingpage. All rights reserved.</p>
        <p>Created by Diego Diaz :D</p>
      </footer>
    </div>
  );
}

export default HomePage;
