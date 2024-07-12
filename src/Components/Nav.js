import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const gradientBackgroundStyle = {
    background: "linear-gradient(70deg,  #FCFCFC 10%, #FCFCFC 50%)",
  };

  const navLinkStyle = {
    marginLeft: '15px',
    marginRight: '15px',
    color: '#000',
    // fontWeight: 'semi-bold',  // This makes the text bold
  };

  const buttonStyle = {
    backgroundColor: '#FF7223',
    borderColor: '#FF7223',
  };

  const centerNavStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  };

  const toggleButtonStyle = {
    border: '1px solid #FF7223',
    backgroundColor: 'transparent',
  };

  const toggleIconStyle = {
    backgroundColor: '#FF7223',
  };

  return (
    <div className="justify-center">
      <Navbar bg="myRed" data-bs-theme="light" style={gradientBackgroundStyle} expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold" href="#home" style={{ color: '#FF7223' }}>
            CurateLearn
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            style={toggleButtonStyle}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon" style={toggleIconStyle}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
            <Nav style={centerNavStyle}>
              {/* <Nav.Link href="#home" style={navLinkStyle}>Home</Nav.Link> */}
              <Nav.Link href="#services" style={navLinkStyle}>Overview</Nav.Link>
              <Nav.Link href="#portfolio" style={navLinkStyle}>About Us</Nav.Link>
              <Nav.Link href="#contact" style={navLinkStyle}>Blog</Nav.Link>
              <Nav.Link href="#faq" style={navLinkStyle}>FAQ's</Nav.Link>
            </Nav>
            <Button color="primary" style={buttonStyle}>Join Waitlist</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;