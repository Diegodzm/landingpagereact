import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";

function NavbarReact() {

  return (
    <Navbar expand="lg" className="navbar navbar-light d-flex animate__animated animate__fadeInDown">
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <div className="logo-container">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">React Landingpage DiegoDiaz</span>
          </div>
        </Navbar.Brand>
       
        <Navbar.Collapse id="basic-navbar-nav">
  
            <Nav.Link href="#home">Link 1</Nav.Link>
            <Nav.Link href="#about">Link 2</Nav.Link>
            
            <NavDropdown title="Link 3" id="basic-nav-dropdown">
              <NavDropdown.Item href="#features">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#pricing">Analytics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#support">Reports</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#services">Link 4</Nav.Link>
            <Nav.Link href="#contact">Link 5</Nav.Link>
            
            <Nav.Link href="#search" className="search-link">
              <span className="search-icon">🔍</span>
            </Nav.Link>
 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReact;
