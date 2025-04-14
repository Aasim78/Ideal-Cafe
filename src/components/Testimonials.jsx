import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const testimonials = [
  {
    id: 1,
    name: "Shreya Sharma",
    location: "Mangalore",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "The Gadbad ice cream at Ideal Café is absolutely heavenly! It's a perfect blend of flavors and textures. My family and I never miss a chance to visit whenever we're in Mangalore."
  },
  {
    id: 2,
    name: "Rahul Nair",
    location: "Bangalore",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
    text: "I've tried ice creams across India, but Ideal Café's signature flavors are unmatched. Their Diana Special is worth traveling for! The ambiance is also very pleasant."
  },
  {
    id: 3,
    name: "Meera Patel",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Visited Mangalore just to try the famous Ideal Café ice creams and they did not disappoint. The kulfi falooda was exceptional! Will definitely be back."
  },
  {
    id: 4,
    name: "Arjun Menon",
    location: "Kochi",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 4,
    text: "The butterscotch ice cream at Ideal Café is the best I've ever had. Creamy, rich, and perfectly sweetened. Their service is also excellent and quick."
  },
  {
    id: 5,
    name: "Priya Verma",
    location: "Mangalore",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 5,
    text: "As a local, I've been visiting Ideal Café for over 10 years now. Their quality and taste have remained consistent. The parfait ice cream is my all-time favorite!"
  },
  {
    id: 6,
    name: "Vikram Singh",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
    rating: 4.5,
    text: "Was in Mangalore for business and a colleague recommended Ideal Café. Their chocolate avalanche is pure bliss for any chocolate lover. Will recommend to anyone visiting Mangalore."
  }
];

const RenderStars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill key={`full-${i}`} className="text-warning" />);
  }
  
  if (hasHalfStar) {
    stars.push(<BsStarHalf key="half" className="text-warning" />);
  }
  
  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<BsStar key={`empty-${i}`} className="text-warning" />);
  }
  
  return <div className="d-flex gap-1">{stars}</div>;
};

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-2 fw-bold">What Our Customers Say</h2>
        <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: "700px" }}>
          Don't just take our word for it – here's what ice cream lovers across India have to say about Ideal Café.
        </p>
        
        <Row className="d-none d-md-flex">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Col md={4} key={testimonial.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <RenderStars rating={testimonial.rating} />
                  <Card.Text className="my-3 text-muted fst-italic">"{testimonial.text}"</Card.Text>
                  <div className="d-flex align-items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="rounded-circle me-3" 
                      width="50" 
                      height="50"
                    />
                    <div>
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.location}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="d-md-none">
          <Carousel indicators={false} className="testimonial-carousel">
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <Card className="border-0 shadow-sm mx-2 h-100">
                  <Card.Body className="p-4">
                    <RenderStars rating={testimonial.rating} />
                    <Card.Text className="my-3 text-muted fst-italic">"{testimonial.text}"</Card.Text>
                    <div className="d-flex align-items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="rounded-circle me-3" 
                        width="50" 
                        height="50"
                      />
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.location}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
