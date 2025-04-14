import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BsCalendarEvent, BsClock, BsClipboard } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const offersList = [
  {
    id: 1,
    title: "Happy Hours: Buy 1 Get 1 Free",
    description: "Every weekday from 3 PM to 5 PM, enjoy a free scoop when you buy one.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    validUntil: "2025-05-31",
    timing: "3 PM to 5 PM",
    days: "Monday to Friday",
    code: "HAPPY2X"
  },
  {
    id: 2,
    title: "Student Special: 15% Off",
    description: "Students get 15% off on all orders above ₹300. Just show your valid student ID.",
    image: "https://images.unsplash.com/photo-1538489949601-3aa1f1a12fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    validUntil: "2025-12-31",
    timing: "All day",
    days: "All week",
    code: "STUDENT15"
  },
  {
    id: 3,
    title: "Family Pack Special",
    description: "1L Family pack with 2 toppings and nuts at just ₹450. Perfect for family gatherings!",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    validUntil: "2025-06-30",
    timing: "All day",
    days: "Weekends only",
    code: "FAMILY450"
  }
];

const Offers = () => {
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Promo code ${code} copied to clipboard!`);
  };
  
  return (
    <section className="py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold mb-1">Special Offers</h2>
            <p className="text-muted">Exclusive deals to make your ice cream experience even sweeter</p>
          </div>
          <Button as={Link} to="/offers" variant="outline-primary">View All Offers</Button>
        </div>
        
        <Row xs={1} md={3} className="g-4">
          {offersList.map((offer) => (
            <Col key={offer.id}>
              <Card className="h-100 shadow-sm border-0">
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <Card.Img 
                    variant="top" 
                    src={offer.image} 
                    alt={offer.title}
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold">{offer.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">{offer.description}</Card.Text>
                  
                  <div className="d-flex align-items-center mb-2 small text-muted">
                    <BsCalendarEvent className="me-2" />
                    <span>Valid until: {new Date(offer.validUntil).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3 small text-muted">
                    <BsClock className="me-2" />
                    <span>{offer.timing}, {offer.days}</span>
                  </div>
                  
                  <div 
                    className="d-flex justify-content-between align-items-center bg-light p-2 rounded mb-3 cursor-pointer"
                    onClick={() => copyCode(offer.code)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="fw-bold font-monospace">{offer.code}</div>
                    <div className="d-flex align-items-center small text-muted">
                      <BsClipboard className="me-1" />
                      <span>Copy code</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Offers;
