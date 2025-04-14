import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const heroItems = [
  {
    id: 1,
    title: "Experience Mangalore's Favorite Ice Cream",
    subtitle: "Award-winning flavors since 1985",
    description: "Indulge in our legendary ice creams that have delighted generations.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    buttonText: "Explore Menu",
    buttonLink: "/menu"
  },
  {
    id: 2,
    title: "Try Our Famous Gadbad Ice Cream",
    subtitle: "Mangalore's signature dessert",
    description: "A legendary combination of multiple flavors, nuts, jelly, and cream.",
    image: "https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    buttonText: "Order Now",
    buttonLink: "/menu"
  },
  {
    id: 3,
    title: "Discover Seasonal Specials",
    subtitle: "Limited time offerings",
    description: "Enjoy our creative seasonal flavors before they're gone.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    buttonText: "See Specials",
    buttonLink: "/offers"
  }
];

const Hero = () => {
  return (
    <div className="hero-section">
      <Carousel fade indicators={false} interval={5000}>
        {heroItems.map((item) => (
          <Carousel.Item key={item.id}>
            <div 
              className="d-block w-100"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                minHeight: '500px'
              }}
            >
              <Container className="h-100 d-flex align-items-center">
                <Row className="justify-content-center text-center text-white">
                  <Col lg={8}>
                    <span className="badge bg-warning text-dark mb-3">{item.subtitle}</span>
                    <h1 className="display-4 fw-bold mb-3">{item.title}</h1>
                    <p className="lead mb-4">{item.description}</p>
                    <Button
                      as={Link}
                      to={item.buttonLink}
                      variant="primary"
                      size="lg"
                      className="rounded-pill px-4"
                    >
                      {item.buttonText}
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
