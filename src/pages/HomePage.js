import React from 'react';
import '../App.css';

function HomePage() {
  return (
    <div className="page-container">
      <main className="hero">
        <div className="hero-content">
          <h1>Welcome to the Home Page</h1>
          <p className="subtitle">This is a dedicated page that loads without a full refresh using React Router.</p>
          <a className="cta" href="#contact">Get started</a>
        </div>
      </main>

      <section className="content-section">
        <div className="content-card">
          <h2>About</h2>
          <p>Placeholder paragraph: add your information here later. Describe the project, goals, or team.</p>
          <p>Placeholder paragraph: more details and context can go here. Expand as needed.</p>
        </div>

        <div className="content-card">
          <h2>Features</h2>
          <p>Placeholder paragraph: list features or services. Keep it concise and structured.</p>
          <p>Placeholder paragraph: add links or calls to action related to features.</p>
        </div>

        <div className="content-card">
          <h2>Contact</h2>
          <p>Placeholder paragraph: contact instructions or a short form can be placed here.</p>
          <p>Placeholder paragraph: social links, addresses, or other ways to reach you.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} React landingpage</p>
        <p className="footer-credit">Made by Diego Diaz</p>
      </footer>
    </div>
  );
}

export default HomePage;
