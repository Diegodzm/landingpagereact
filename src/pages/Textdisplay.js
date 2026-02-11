import React from 'react';
import '../styles/Textdisplay.css';

function Textdisplay() {
  const paragraphs = {
    intro: "React is a JavaScript library for building user interfaces with reusable components. It enables developers to create dynamic and interactive applications with efficient rendering and state management capabilities.",
    content1: "The power of React lies in its component-based architecture, which allows developers to break down complex user interfaces into manageable, reusable pieces. Each component encapsulates its own state and lifecycle, making applications more maintainable and scalable.",
    content2: "With React's virtual DOM, applications achieve optimal performance by efficiently updating only the parts of the interface that have changed. This intelligent diffing algorithm ensures smooth user experiences even in data-intensive applications.",
    content3: "React's unidirectional data flow and immutable state management principles promote predictable application behavior and make debugging easier. The ecosystem around React continues to grow, providing developers with powerful tools and libraries.",
    content4: "Whether you're building single-page applications, progressive web apps, or cross-platform mobile applications with React Native, the framework provides a solid foundation for modern web development."
  };

  return (
    <div className="textdisplay-container">
      {/* Hero Section */}
      <section className="text-hero">
        <h1 className="hero-title">Text Display Showcase</h1>
        <p className="hero-subtitle">Professional typography layouts powered by React</p>
      </section>

      {/* Single Column Layout */}
      <section className="text-section">
        <h2 className="section-title">Single Column Layout</h2>
        <div className="layout-single">
          <article className="text-article">
            <h3>Understanding React Fundamentals</h3>
            <p>{paragraphs.content1}</p>
            <p>{paragraphs.content2}</p>
          </article>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="text-section">
        <h2 className="section-title">Two Column Layout</h2>
        <div className="layout-two-column">
          <article className="text-article">
            <h3>Component Architecture</h3>
            <p>{paragraphs.intro}</p>
            <ul className="text-list">
              <li>Reusable components</li>
              <li>Props and state management</li>
              <li>Lifecycle methods</li>
              <li>Hooks and functional components</li>
            </ul>
          </article>
          <article className="text-article">
            <h3>Performance Optimization</h3>
            <p>{paragraphs.content3}</p>
            <ul className="text-list">
              <li>Virtual DOM efficiency</li>
              <li>Memoization techniques</li>
              <li>Code splitting</li>
              <li>Lazy loading</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Three Column Layout */}
      <section className="text-section">
        <h2 className="section-title">Three Column Layout</h2>
        <div className="layout-three-column">
          <div className="column-card">
            <h4>Ecosystem</h4>
            <p>{paragraphs.content1}</p>
          </div>
          <div className="column-card">
            <h4>State Management</h4>
            <p>{paragraphs.content2}</p>
          </div>
          <div className="column-card">
            <h4>Best Practices</h4>
            <p>{paragraphs.content4}</p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="text-section">
        <h2 className="section-title">Feature Grid with Text</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h4>Fast Performance</h4>
            <p>React's virtual DOM ensures lightning-fast rendering and optimal user experience across all devices.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h4>Easy to Use</h4>
            <p>Simple API and comprehensive documentation make React accessible to developers of all skill levels.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h4>Universal</h4>
            <p>Build web applications, mobile apps with React Native, and desktop applications using the same principles.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h4>Flexible Design</h4>
            <p>Powerful component composition enables endless design possibilities and creative implementations.</p>
          </div>
        </div>
      </section>

      {/* Article Style Layout */}
      <section className="text-section article-section">
        <h2 className="section-title">Article Style Layout</h2>
        <article className="full-article">
          <div className="article-header">
            <h3>The Future of Modern Web Development</h3>
            <span className="article-meta">Published on February 11, 2026 | 5 min read</span>
          </div>
          <div className="article-body">
            <p><strong>Introduction:</strong> {paragraphs.intro}</p>
            <p>{paragraphs.content1}</p>
            <p>{paragraphs.content2}</p>
            <h4>Key Benefits</h4>
            <p>{paragraphs.content3}</p>
            <p>{paragraphs.content4}</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Textdisplay;
