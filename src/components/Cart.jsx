import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Table, Alert } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';
import { BsTrash, BsDash, BsPlus, BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [showThankYou, setShowThankYou] = useState(false);
  
  const handleCheckout = (e) => {
    e.preventDefault();
    
    // Simulate order processing
    setTimeout(() => {
      setShowThankYou(true);
      clearCart();
    }, 1000);
  };
  
  if (showThankYou) {
    return (
      <Container className="py-5 my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="border-0 shadow text-center p-4">
              <div className="mb-4">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: "80px", height: "80px"}}>
                  <i className="fs-1">✓</i>
                </div>
              </div>
              <h2 className="mb-3">Thank You!</h2>
              <p className="text-muted mb-4">Your order has been received and is being processed. You will receive a confirmation shortly.</p>
              <Button as={Link} to="/" variant="primary" size="lg">
                Return to Home
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  
  if (cartItems.length === 0) {
    return (
      <Container className="py-5">
        <Card className="border-0 shadow p-4 text-center">
          <h2 className="mb-4">Your Cart is Empty</h2>
          <p className="text-muted mb-4">Looks like you haven't added any items to your cart yet.</p>
          <Button as={Link} to="/menu" variant="primary" size="lg">
            <BsArrowLeft className="me-2" />
            Browse Menu
          </Button>
        </Card>
      </Container>
    );
  }
  
  return (
    <Container className="py-5">
      <h2 className="mb-4">Your Cart</h2>
      
      <Row>
        <Col lg={8} className="mb-4 mb-lg-0">
          <Card className="border-0 shadow mb-4">
            <Card.Header className="bg-white">
              <h5 className="mb-0">Items ({cartItems.length})</h5>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table hover>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              style={{width: "50px", height: "50px", objectFit: "cover"}}
                              className="rounded me-3"
                            />
                            <div>
                              <h6 className="mb-0">{item.name}</h6>
                              <small className="text-muted">{item.category}</small>
                            </div>
                          </div>
                        </td>
                        <td>₹{item.price.toFixed(2)}</td>
                        <td>
                          <InputGroup size="sm" style={{width: "120px"}}>
                            <Button 
                              variant="outline-secondary"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <BsDash />
                            </Button>
                            <Form.Control 
                              value={item.quantity}
                              onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (!isNaN(value)) {
                                  updateQuantity(item.id, value);
                                }
                              }}
                              className="text-center"
                            />
                            <Button 
                              variant="outline-secondary"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <BsPlus />
                            </Button>
                          </InputGroup>
                        </td>
                        <td className="fw-bold">₹{(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <Button 
                            variant="link" 
                            className="text-danger p-0"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <BsTrash />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              
              <div className="d-flex justify-content-between mt-3">
                <Button 
                  as={Link} 
                  to="/menu" 
                  variant="outline-primary"
                >
                  <BsArrowLeft className="me-2" />
                  Continue Shopping
                </Button>
                <Button 
                  variant="outline-danger"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card className="border-0 shadow sticky-lg-top" style={{top: "20px"}}>
            <Card.Header className="bg-white">
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Fee</span>
                <span>₹40.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (5%)</span>
                <span>₹{(totalPrice * 0.05).toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-4">
                <span>Total</span>
                <span>₹{(totalPrice + 40 + totalPrice * 0.05).toFixed(2)}</span>
              </div>
              
              <Form onSubmit={handleCheckout}>
                <h6 className="mb-3">Contact Information</h6>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    placeholder="Full Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    as="textarea" 
                    rows={2} 
                    placeholder="Delivery Address" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Delivery Options</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      id="delivery"
                      name="deliveryOption"
                      label="Home Delivery"
                      value="delivery"
                      checked={deliveryOption === 'delivery'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                      className="mb-2"
                    />
                    <Form.Check
                      type="radio"
                      id="pickup"
                      name="deliveryOption"
                      label="Pickup from Store"
                      value="pickup"
                      checked={deliveryOption === 'pickup'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                    />
                  </div>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Payment Method</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      label="Cash on Delivery"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mb-2"
                    />
                    <Form.Check
                      type="radio"
                      id="online"
                      name="paymentMethod"
                      label="Online Payment"
                      value="online"
                      checked={paymentMethod === 'online'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                  </div>
                </Form.Group>
                
                <Button type="submit" variant="primary" className="w-100" size="lg">
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
