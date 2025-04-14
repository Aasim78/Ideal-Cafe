import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { menuItems } from '../data/menuData';
import { useCart } from '../contexts/CartContext';
import { BsCartPlus } from 'react-icons/bs';

const IceCreamOfDay = () => {
  const [dailyIceCream, setDailyIceCream] = useState(null);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Get only ice creams
    const iceCreams = menuItems.filter(item => item.category === "Ice Creams");
    
    // Get a "random" ice cream based on the day of the month
    const day = new Date().getDate();
    const index = day % iceCreams.length;
    
    setDailyIceCream(iceCreams[index]);
  }, []);
  
  if (!dailyIceCream) return null;
  
  return (
    <section className="py-5 bg-info bg-opacity-10">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Ice Cream of the Day</h2>
        
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img 
              src={dailyIceCream.image} 
              alt={dailyIceCream.name} 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
          </Col>
          
          <Col md={6}>
            <Card className="border-0 shadow">
              <Card.Body className="p-4">
                <div className="badge bg-warning text-dark mb-3">Special of the Day</div>
                <h3 className="mb-3">{dailyIceCream.name}</h3>
                <p className="text-muted mb-3">{dailyIceCream.description}</p>
                <p className="fs-4 fw-bold text-primary mb-4">₹{dailyIceCream.price.toFixed(2)}</p>
                
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="me-2">Rating:</span>
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`fs-5 ${i < Math.floor(dailyIceCream.rating) ? 'text-warning' : 'text-muted'}`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ms-2">({dailyIceCream.rating})</span>
                  </div>
                </div>
                
                <hr className="my-4" />
                
                <div className="d-grid gap-2">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    onClick={() => addToCart(dailyIceCream)}
                  >
                    <BsCartPlus className="me-2" />
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IceCreamOfDay;
