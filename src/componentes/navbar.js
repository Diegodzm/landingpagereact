import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import './navbar.css';

function NavbarReact() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };
  return (
    <>
    <Navbar className="bg-custom-gradient" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="React Logo"
            src={process.env.PUBLIC_URL + '/logo192.png'}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/textdisplay">Textos</Nav.Link>
            <Nav.Link as={Link} to="/imgdisplay">Imagenes</Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Dropdown</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
             <Nav.Link as={Link} to="/register">
              Registro
            </Nav.Link>
            <Nav.Link onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
              Ingreso
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <LoginModal show={showLoginModal} onHide={handleCloseModal} />
    </>
  );
}

export default NavbarReact;