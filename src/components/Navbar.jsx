import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Badge
} from 'react-bootstrap';
import { BsCart3, BsSearch } from 'react-icons/bs';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center fw-bold text-primary fs-4"
        >
          <img
            src={logo}
            alt="Ideal Café Logo"
            width="40"
            height="40"
            className="me-2"
            style={{ objectFit: 'contain', borderRadius: '50%' }}
          />
          Ideal Café
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex mx-auto" onSubmit={handleSearch}>
            <div className="position-relative">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                variant="outline-success"
                type="submit"
                className="position-absolute end-0 top-0 h-100"
              >
                <BsSearch />
              </Button>
            </div>
          </Form>

          <Nav>
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <BsCart3 size={20} />
              {totalItems > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
