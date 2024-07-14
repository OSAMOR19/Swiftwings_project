import React, { Fragment, useState } from "react";
import { Container, Row, Button, Form, Input, InputGroup, InputGroupText, Card, CardBody } from "reactstrap";
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

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
                color="dark"
                className="px-4 py-2 rounded-pill mb-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  color: "dark",
                  fontWeight: "bold"
                }}
              >
                Contact Us
              </Button>

              <Card className="mt-4" style={{ borderRadius: '20px', maxWidth: '400px', margin: '0 auto' }}>
                <CardBody>
                  <h5 className="mb-3" style={{ color: '#5C0632' }}>Subscribe to Our Newsletter</h5>
                  <Form onSubmit={handleSubmit}>
                    <InputGroup>
                      <InputGroupText>
                        <FaEnvelope />
                      </InputGroupText>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button
                        type="submit"
                        color="light"
                        style={{
                          backgroundColor: "#5C0632",
                          border: "none",
                          color: "white",
                          fontWeight: "bold"
                        }}
                      >
                        Subscribe
                      </Button>
                    </InputGroup>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Contact;