import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Col,
  Row,
  CardBody,
  Button,
  Fade,
} from "react-bootstrap";
import NavBar from "./Nav";

import img1 from "../Images/vipicon.png";
import img2 from "../Images/globalaccess.png";
import img3 from "../Images/timeicon.png";
import img4 from "../Images/addpersonicon.png";
import img6 from "../Images/teacher.svg";
import img5 from "../Images/curriculumpic.png";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const cardStyle = {
    background: "#FDF9EF",
    transition: "all 0.3s ease-in-out",
  };

  const buttonStyle = {
    background: "#FAF3DD",
    border: "none",
    transition: "background-color 0.3s ease-in-out",
    color: "#5C0632",
  };

  const handleCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter
      ? "translateY(-5px)"
      : "translateY(0)";
    e.currentTarget.style.boxShadow = enter
      ? "0 10px 20px rgba(0, 0, 0, 0.1)"
      : "none";
  };

  const handleButtonHover = (e, enter) => {
    e.currentTarget.style.backgroundColor = enter ? "#FF5500" : "#FF7223";
  };

  return (
    <React.Fragment>
      <section
        id="portfolio"
        className=""
        style={{ background: "#FFFFF" }}
      >
        <Container>
          <Row className="justify-content-center mt-3">
            <Col lg={8}>
              <div className="text-center pt-5 text-dark mb-5">
                <h1
                  className="fw-bold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Why Choose Swiftwings
                </h1>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center gy-4">
            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <img
                          src={img1}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                      >
                        Vip Treatment
                      </Button>
                      <p
                        className="card-text mb-1 text-center text-muted"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Enjoy luxurious comfort, in-flight catering customised
                        to your taste. Get entertained by favourite shows or
                        stay connected with work using free Wi-Fi. Arrive
                        refreshed & ready for your destination. Fly on a private
                        flight schedule
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <img
                          src={img4}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                      >
                        Global Access
                      </Button>

                      <p
                        className="card-text mt-2 mb-1 text-center text-muted"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Swiftwings grants you exclusive access to private jets
                        for seamless travel anywhere in the globe. Remember, we
                        bring the world closer to you!
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <img
                          src={img3}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Save Time
                      </Button>

                      <p
                        className="card-text mb-1 text-center text-muted"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Skip the crowds & time wasters! Time is a precious
                        commodity not to be wasted. Fly private, fast and secure
                        with Swiftwings private jet charter services.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <img
                          src={img4}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                      >
                        Membership
                      </Button>

                      <p
                        className="card-text mb-1 text-center text-muted"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Network with high profile individuals like you and
                        strike a deeper connection and get access to premium
                        services like: unlimited private jet access, highly
                        personalised travel experience, priority scheduling,
                        empty leg prior notification, etc
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
