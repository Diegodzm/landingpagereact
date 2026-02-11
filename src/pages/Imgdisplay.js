import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import '../styles/Imgdisplay.css';

function Imgdisplay() {
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
        <Carousel className="carousel-container">
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="carousel-image"
                src={image.url}
                alt={image.title}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Three Column Grid */}
      <section className="img-section">
        <h2 className="section-title">Three Column Grid Layout</h2>
        <Container>
          <Row className="g-4">
            {galleryImages.map((image, index) => (
              <Col key={index} xs={12} sm={6} lg={4}>
                <Card className="grid-item h-100">
                  <Card.Img variant="top" src={image} alt={`Gallery ${index + 1}`} className="grid-image" />
                  <div className="grid-overlay">
                    <p>Image {index + 1}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Masonry Layout */}
      <section className="img-section">
        <h2 className="section-title">Masonry Layout</h2>
        <Container>
          <Row className="g-3">
            {masonryImages.map((item, index) => (
              <Col 
                key={index} 
                xs={12} 
                sm={6} 
                lg={4}
                className={index === 1 || index === 4 ? 'masonry-tall' : ''}
              >
                <Card className="masonry-item h-100">
                  <Card.Img variant="top" src={item.url} alt={`Masonry ${index + 1}`} className="masonry-image" />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Large Featured + Side Images */}
      <section className="img-section">
        <h2 className="section-title">Featured Image Layout</h2>
        <Container>
          <Row className="g-4">
            <Col lg={8}>
              <Card className="featured-main h-100">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                  alt="Featured"
                  className="featured-image"
                />
              </Card>
            </Col>
            <Col lg={4}>
              <Row className="g-3">
                <Col xs={12}>
                  <Card className="featured-small">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop" alt="Side 1" />
                  </Card>
                </Col>
                <Col xs={12}>
                  <Card className="featured-small">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1495694335510-fcf239989fde?w=300&h=300&fit=crop" alt="Side 2" />
                  </Card>
                </Col>
                <Col xs={12}>
                  <Card className="featured-small">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop" alt="Side 3" />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 React landingpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Imgdisplay;
