import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarReact from './componentes/navbar';

function App() {
  return (
    <div className="App">
      <header className="hero">
      <NavbarReact></NavbarReact>

        <div className="hero-content">
          <h1>React landingpage</h1>
          <p className="subtitle">A simple starter landing page built with React.</p>
          <a className="cta" href="#contact">Get started</a>
        </div>
      </header>

      <main>
        <section id="features" className="features">
          <h2>Features</h2>
          <p>Responsive, accessible, and easy to customize.</p>
        </section>

        <section id="pricing" className="pricing">
          <h2>Pricing</h2>
          <p>Free to start — scale as you grow.</p>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>Contact us at <a href="mailto:hello@example.com">hello@example.com</a></p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} React landingpage</p>
      </footer>
    </div>
  );
}

export default App; 
