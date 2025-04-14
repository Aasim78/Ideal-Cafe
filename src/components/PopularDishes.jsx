import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { menuItems } from "../data/menuData";
import MenuCard from "./MenuCard";

const PopularDishes = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  
  const popularItems = menuItems
    .filter(item => item.isPopular)
    .slice(0, visibleItems);
  
  const loadMore = () => {
    setVisibleItems(prev => prev + 4);
  };
  
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Popular Dishes</h2>
        <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: "700px" }}>
          Our customers' favorites - these signature dishes have won the hearts of ice cream lovers across Mangalore.
        </p>
        
        <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
          {popularItems.map(item => (
            <Col key={item.id}>
              <MenuCard item={item} />
            </Col>
          ))}
        </Row>
        
        {visibleItems < menuItems.filter(item => item.isPopular).length && (
          <div className="text-center mt-4">
            <Button 
              onClick={loadMore}
              variant="outline-primary"
            >
              Load More
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default PopularDishes;
