import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <nav className="nav">
          <div className="brand">React landingpage</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

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
