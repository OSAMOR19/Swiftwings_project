import React, { useState, Fragment } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Alert,
} from "reactstrap";

const Contact = () => {
  const [animationNavTab, setAnimationNavTab] = useState("1");
  const animationNavToggle = (tab) => {
    if (animationNavTab !== tab) {
      setAnimationNavTab(tab);
    }
  };

  return (
    <Fragment>
      <section className="section" id="contact">
        <Container className="mt-5 mb-5">
          <Row className="gy-4">
            <Col lg={5}>
              <div>
                <div className="">
                  <h2
                    className="fs-13 mt-4 mb-0 fw-semi-bold"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Join other self-learners to stay informed and be the first
                    to experience CurateLearn.
                  </h2>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div>
                <Form>
                  <Row>
                    <Col lg={12}>
                      <div className="mb-4 custom-input-container">
                        <label htmlFor="name" className="form-label fs-13">
                          Name
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control bg-light border-light custom-input"
                          placeholder="Enter name*"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-4 custom-input-container">
                        <label htmlFor="email" className="form-label fs-13">
                          Email
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control bg-light border-light custom-input"
                          placeholder="Enter email*"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className="text-end rounded-pill custom-input-container">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="submitBnt btn btn-primary custom-input"
                        value="Join waitlist"
                        style={{ background: "#FF7223", border: "none" }}
                      />
                    </Col>
                  </Row>
                </Form>
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <style jsx>{`
        .custom-input-container {
          max-width: 400px; /* Adjust this value as needed */
          margin: 0 auto;
        }

        .custom-input {
          max-width: 100%;
        }
      `}</style>
    </Fragment>
  );
};

export default Contact;
