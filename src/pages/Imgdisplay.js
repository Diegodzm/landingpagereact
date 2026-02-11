import React, { useState } from 'react';
import '../styles/Imgdisplay.css';

function Imgdisplay() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Professional stock images from Unsplash API
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      title: 'Mountain Landscape',
      description: 'Scenic mountain vista at sunrise'
    },
    {
      url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=600&fit=crop',
      title: 'Modern Workspace',
      description: 'Contemporary office environment'
    },
    {
      url: 'https://images.unsplash.com/photo-1495694335510-fcf239989fde?w=1200&h=600&fit=crop',
      title: 'Technology Innovation',
      description: 'Creative tech workspace'
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
      title: 'Team Collaboration',
      description: 'Professional team working together'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1551821440-fc7ee4f28883?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1525634126519-18d7f1b632b5?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1496438775694-20f1d513ee60?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=500&fit=crop',
  ];

  const masonryImages = [
    { url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop', height: 300 },
    { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', height: 400 },
    { url: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=350&fit=crop', height: 350 },
    { url: 'https://images.unsplash.com/photo-1478066143081-80f7f84ca84d?w=400&h=320&fit=crop', height: 320 },
    { url: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=380&fit=crop', height: 380 },
    { url: 'https://images.unsplash.com/photo-1518176506295-34a08f5a2c17?w=400&h=340&fit=crop', height: 340 },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="imgdisplay-container">
      {/* Hero Section */}
      <section className="img-hero">
        <h1 className="img-hero-title">Image Gallery Showcase</h1>
        <p className="img-hero-subtitle">Professional layouts with carousels, grids, and masonry designs</p>
      </section>

      {/* Carousel Section */}
      <section className="img-section">
        <h2 className="section-title">Featured Carousel</h2>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src={carouselImages[currentSlide].url}
              alt={carouselImages[currentSlide].title}
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h3>{carouselImages[currentSlide].title}</h3>
              <p>{carouselImages[currentSlide].description}</p>
            </div>
          </div>

          <button className="carousel-btn carousel-btn-prev" onClick={handlePrevSlide}>
            &#10094;
          </button>
          <button className="carousel-btn carousel-btn-next" onClick={handleNextSlide}>
            &#10095;
          </button>

          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Three Column Grid */}
      <section className="img-section">
        <h2 className="section-title">Three Column Grid Layout</h2>
        <div className="grid-layout-three">
          {galleryImages.map((image, index) => (
            <div key={index} className="grid-item">
              <img src={image} alt={`Gallery ${index + 1}`} className="grid-image" />
              <div className="grid-overlay">
                <p>Image {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Masonry Layout */}
      <section className="img-section">
        <h2 className="section-title">Masonry Layout</h2>
        <div className="masonry-layout">
          {masonryImages.map((item, index) => (
            <div key={index} className="masonry-item">
              <img src={item.url} alt={`Masonry ${index + 1}`} className="masonry-image" />
            </div>
          ))}
        </div>
      </section>

      {/* Large Featured + Side Images */}
      <section className="img-section">
        <h2 className="section-title">Featured Image Layout</h2>
        <div className="featured-layout">
          <div className="featured-main">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
              alt="Featured"
              className="featured-image"
            />
          </div>
          <div className="featured-side">
            <div className="featured-small">
              <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop" alt="Side 1" />
            </div>
            <div className="featured-small">
              <img src="https://images.unsplash.com/photo-1495694335510-fcf239989fde?w=300&h=300&fit=crop" alt="Side 2" />
            </div>
            <div className="featured-small">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop" alt="Side 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 React landingpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Imgdisplay;
