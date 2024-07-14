import React, { Fragment } from "react";
import { Container, Row, Button } from "reactstrap";

const Contact = () => {
  return (
    <Fragment>
      <section className="section py-5" id="contact" style={{ backgroundColor: "#5C0632" }}>
        <Container className="">
          <Row className="justify-content-center">
            <div className="text-center" style={{ maxWidth: "800px" }}>
              <h2
                className="fs-2 text-white mt-4 mb-3 fw-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Let's work together
              </h2>
              <p className="text-white mb-5">
                Swift Wings Ltd offers an exclusive Jet Card Membership,
                providing discerning travelers with unparalleled access to
                private jet charter services. As a Jet Card member, you enjoy
                priority booking and seamless travel experiences tailored to
                your preferences.
              </p>
              <Button 
                color="light" 
                className="px-4 py-2 rounded-pill"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.2)", 
                  border: "none",
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Contact Us
              </Button>
            </div>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Contact;