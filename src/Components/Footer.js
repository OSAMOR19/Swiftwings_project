import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(90deg, #0E0D13 0%, #121212 100%)",
    color: "#ffffff",
    paddingTop: "40px",
    paddingBottom: "40px",
  };

  const textCenter = {
    textAlign: "start",
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "15px",
  };

  const linkColumnStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const curateLearnStyle = {
    color: "#FF7223",
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col lg={4}>
            <div>
              <h2 style={curateLearnStyle}>CurateLearn</h2>
              <p style={textCenter}>© 2024. CurateLearn All rights reserved.</p>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col sm={6}>
                <div style={linkColumnStyle}>
                  <a href="#home" style={linkStyle}>Community</a>
                  <a href="#portfolio" style={linkStyle}>Contact us</a>
                  <a href="#contact" style={linkStyle}>curatelearn@aceembedded.io</a>
                  <a href="#faq" style={linkStyle}>+234-805-123-0116</a>
                </div>
              </Col>
              <Col sm={6}>
                <div style={linkColumnStyle}>
                  <a href="#about" style={linkStyle}>FAQs</a>
                  <a href="#blog" style={linkStyle}>Blog</a>
                  <a href="#testimonials" style={linkStyle}>Privacy Policy</a>
                  <a href="#pricing" style={linkStyle}>Terms of Use</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;