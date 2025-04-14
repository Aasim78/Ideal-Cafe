import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';
import { BsStarFill, BsCart3 } from 'react-icons/bs';

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(item);
  };
  
  return (
    <Card className="h-100 shadow-sm border-0">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={item.image} 
          alt={item.name}
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <div className="position-absolute top-0 start-0 m-2">
          {item.isNew && (
            <Badge bg="danger" className="me-1">New</Badge>
          )}
          {item.isPopular && (
            <Badge bg="success">Popular</Badge>
          )}
        </div>
        <div className="position-absolute top-0 end-0 m-2 d-flex bg-dark bg-opacity-75 rounded px-2 py-1 text-white">
          <BsStarFill className="text-warning me-1" />
          <span>{item.rating}</span>
        </div>
      </div>
      
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="text-muted small mb-2">{item.description}</Card.Text>
        <Card.Text className="mb-2 fw-bold text-success">₹{item.price.toFixed(2)}</Card.Text>
      </Card.Body>
      
      <Card.Footer className="bg-white border-0">
        <Button 
          variant="primary" 
          className="w-100 d-flex align-items-center justify-content-center"
          onClick={handleAddToCart}
        >
          <BsCart3 className="me-2" />
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default MenuCard;
    