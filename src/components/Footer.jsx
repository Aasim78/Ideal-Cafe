import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          {/* Brand Info */}
          <Col xs={12} md={4} className="mb-4">
            <h5>Ideal Café</h5>
            <p>
              Serving the finest ice creams in Mangalore since 1985. Our award-winning recipes have been delighting customers for generations.
            </p>
            <div className="d-flex gap-3 mt-3">
              <Button variant="outline-light" size="sm"><BsFacebook /></Button>
              <Button variant="outline-light" size="sm"><BsInstagram /></Button>
              <Button variant="outline-light" size="sm"><BsTwitter /></Button>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={6} md={2} className="mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="/menu" className="text-light text-decoration-none">Menu</a></li>
              <li className="mb-2"><a href="/offers" className="text-light text-decoration-none">Offers</a></li>
              <li className="mb-2"><a href="/locations" className="text-light text-decoration-none">Locations</a></li>
              <li className="mb-2"><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col xs={6} md={3} className="mb-4">
            <h6>Contact Info</h6>
            <ul className="list-unstyled">
              <li className="mb-2">456 MG Road, Mangalore</li>
              <li className="mb-2">Karnataka 575001</li>
              <li className="mb-2">+91 9876543210</li>
              <li className="mb-2">info@idealcafe.com</li>
              <li className="mb-2">Mon-Sun: 9:00 AM - 10:00 PM</li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col xs={12} md={3} className="mb-4">
            <h6>Newsletter</h6>
            <p>Subscribe to receive updates on new flavors and exclusive offers.</p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Your email"
                aria-label="Your email"
                aria-describedby="subscribe-button"
              />
              <Button variant="primary" id="subscribe-button">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <hr className="my-4 bg-light" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Ideal Café. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
