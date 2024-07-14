// Home.js
import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardBody,
  Input,
} from "reactstrap";
import NavBar from "./Nav";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import CountUp from "react-countup";
import bgimage from "../Images/betterimage.png";
import { FaPlane, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    console.log("Background image URL:", bgimage);
    setAnimate(true);
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar />
        <section
          className="section pb-0 hero-section flex-grow-1 d-flex align-items-end"
          id="home"
        >
          <div className="bg-overlay bg-overlay-pattern"></div>
          <Container className="mb-5">
            <Row className="justify-content-center">
              <Col xs={12} sm={10} lg={8}>
                <div className="text-center text-light">
                  <h1
                    className={`display-10 fw-bold mb-3 text-light lh-base custom-title ${
                      animate ? "animate-slide-in" : ""
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    The world is closer to you
                  </h1>
                  <p
                    className="lead text-break text-light custom-lead"
                    style={{ fontFamily: "Mulish, sans-serif" }}
                  >
                    <Row className="text-center justify-content-center gy-4">
                      <Col xs={4} sm={3} md={2}>
                        <div>
                          <h5 className="mb-1">
                            <span className="counter-value" data-target="10">
                              <CountUp start={0} end={10} duration={3} />
                            </span>
                            K
                          </h5>
                          <div className="text-light small">Flights</div>
                        </div>
                      </Col>

                      <Col xs={4} sm={3} md={2}>
                        <div>
                          <h5 className="mb-1">
                            <span className="counter-value" data-target="15">
                              <CountUp
                                start={0}
                                end={15}
                                duration={3}
                                decimal={1}
                              />
                            </span>
                            k
                          </h5>
                          <div className="text-light small">Clients</div>
                        </div>
                      </Col>

                      <Col xs={4} sm={3} md={2}>
                        <div>
                          <h5 className="mb-1">
                            <span className="counter-value" data-target="50">
                              <CountUp start={0} end={50} duration={3} />
                            </span>
                          </h5>
                          <div className="text-light small">Employees</div>
                        </div>
                      </Col>
                    </Row>
                  </p>
                  <div className="glassmorphism-card mt-4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <span className="text-light book-jet-text d-none d-md-inline">
                        Book a Jet
                      </span>
                      <Nav pills className="glassmorphism-nav my-2 mx-auto">
                        <NavItem>
                          <NavLink
                            className={activeTab === "1" ? "active" : ""}
                            onClick={() => {
                              toggle("1");
                            }}
                          >
                            One Way Trip
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={activeTab === "2" ? "active" : ""}
                            onClick={() => {
                              toggle("2");
                            }}
                          >
                            Round Trip
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={activeTab === "3" ? "active" : ""}
                            onClick={() => {
                              toggle("3");
                            }}
                          >
                            Multi City Trip
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <Button color="primary" className="book-jet-btn mt-2 mt-md-0">
                        Book a Jet <i className="ri-arrow-right-line ms-2"></i>
                      </Button>
                    </div>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <Row className="g-3 mt-2">
                          <Col xs={12} md={4}>
                            <Card className="glassmorphism-inner-card">
                              <CardBody>
                                <h6 className="text-light mb-2">
                                  <FaPlane className="me-2" />From / To
                                </h6>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <p className="text-light mb-0 small">Abuja</p>
                                    <small className="text-muted">Nigeria</small>
                                  </div>
                                  <FaPlane className="text-light mx-2" />
                                  <div className="text-end">
                                    <p className="text-light mb-0 small">Lagos</p>
                                    <small className="text-muted">Nigeria</small>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs={12} md={4}>
                            <Card className="glassmorphism-inner-card">
                              <CardBody>
                                <h6 className="text-light mb-2">
                                  <FaCalendarAlt className="me-2" />Departure Date
                                </h6>
                                <Input 
                                  type="date" 
                                  className="form-control-sm bg-transparent text-light border-0"
                                />
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs={12} md={4}>
                            <Card className="glassmorphism-inner-card">
                              <CardBody>
                                <h6 className="text-light mb-2">
                                  <FaUsers className="me-2" />Passengers
                                </h6>
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <p className="text-light mb-1 small">Adults</p>
                                    <Input 
                                      type="number" 
                                      min="1" 
                                      max="9" 
                                      defaultValue="1"
                                      className="form-control-sm bg-transparent text-light border-0"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-light mb-1 small">Children</p>
                                    <Input 
                                      type="number" 
                                      min="0" 
                                      max="9" 
                                      defaultValue="0"
                                      className="form-control-sm bg-transparent text-light border-0"
                                    />
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2">
                      <TabPane tabId="1">
                        <Row className="g-3 mt-2">
                          <Col xs={12} md={4}>
                            <Card className="glassmorphism-inner-card">
                              <CardBody>
                                <h6 className="text-light mb-2">
                                  <FaPlane className="me-2" />From / To
                                </h6>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <p className="text-light mb-0 small">Abuja</p>
                                    <small className="text-muted">Nigeria</small>
                                  </div>
                                  <FaPlane className="text-light mx-2" />
                                  <div className="text-end">
                                    <p className="text-light mb-0 small">Lagos</p>
                                    <small className="text-muted">Nigeria</small>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs={12} md={4}>
                            <Card className="glassmorphism-inner-card">
                              <CardBody>
                                <h6 className="text-light mb-2">
                                  <FaCalendarAlt className="me-2" />Departure Date
                                </h6>
                                <Input 
                                  type="date" 
                                  className="form-control-sm bg-transparent text-light border-0"
                                />
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs={12} md={4}>
                            <Card className="glassmorphism-inner-card">
                              <CardBody>
                                <h6 className="text-light mb-2">
                                  <FaUsers className="me-2" />Passengers
                                </h6>
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <p className="text-light mb-1 small">Adults</p>
                                    <Input 
                                      type="number" 
                                      min="1" 
                                      max="9" 
                                      defaultValue="1"
                                      className="form-control-sm bg-transparent text-light border-0"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-light mb-1 small">Children</p>
                                    <Input 
                                      type="number" 
                                      min="0" 
                                      max="9" 
                                      defaultValue="0"
                                      className="form-control-sm bg-transparent text-light border-0"
                                    />
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </TabPane>
                      </TabPane>
                      <TabPane tabId="3">
                      <TabPane tabId="1">
                        <Row className="g-3 mt-2">
                          <Col xs={12} md={4}>
                            <Card className="glassmorphism-inner-card">
                              <CardBody>
                                <h6 className="text-light mb-2">
                                  <FaPlane className="me-2" />From / To
                                </h6>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <p className="text-light mb-0 small">Abuja</p>
                                    <small className="text-muted">Nigeria</small>
                                  </div>
                                  <FaPlane className="text-light mx-2" />
                                  <div className="text-end">
                                    <p className="text-light mb-0 small">Lagos</p>
                                    <small className="text-muted">Nigeria</small>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs={12} md={4}>
                            <Card className="glassmorphism-inner-card">
                              <CardBody>
                                <h6 className="text-light mb-2">
                                  <FaCalendarAlt className="me-2" />Departure Date
                                </h6>
                                <Input 
                                  type="date" 
                                  className="form-control-sm bg-transparent text-light border-0"
                                />
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs={12} md={4}>
                            <Card className="glassmorphism-inner-card">
                              <CardBody>
                                <h6 className="text-light mb-2">
                                  <FaUsers className="me-2" />Passengers
                                </h6>
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <p className="text-light mb-1 small">Adults</p>
                                    <Input 
                                      type="number" 
                                      min="1" 
                                      max="9" 
                                      defaultValue="1"
                                      className="form-control-sm bg-transparent text-light border-0"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-light mb-1 small">Children</p>
                                    <Input 
                                      type="number" 
                                      min="0" 
                                      max="9" 
                                      defaultValue="0"
                                      className="form-control-sm bg-transparent text-light border-0"
                                    />
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </TabPane>
                      </TabPane>
                    </TabContent>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Mulish&display=swap");
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        .custom-title {
          font-size: 2.5rem;
          line-height: 1.2;
          opacity: 0;
        }
        .custom-lead {
          font-size: 1.1rem;
        }
        .glassmorphism-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .glassmorphism-inner-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(5px);
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .glassmorphism-nav {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          border-radius: 50px;
          padding: 5px;
          background-image: radial-gradient(
            circle,
            rgba(131, 131, 131, 0.348) 0%,
            rgba(33, 33, 33, 0.324) 100%
          );
        }
        .glassmorphism-nav .nav-link {
          color: white;
          border-radius: 50px;
          padding: 8px 15px;
          font-size: 0.9rem;
        }
        .glassmorphism-nav .nav-link.active {
          background-color: rgba(21, 21, 21, 0.43);
          color: white;
        }
        .book-jet-btn {
          border-radius: 50px;
          padding: 8px 15px;
          white-space: nowrap;
          background-color: #5c0632;
          border-color: #5c0632;
          font-size: 0.9rem;
        }
        .book-jet-text {
          font-size: 1.1rem;
          font-weight: bold;
          white-space: nowrap;
        }
        .form-control-sm {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border: none !important;
          color: white !important;
          font-size: 0.9rem;
        }
        .form-control-sm:focus {
          box-shadow: none !important;
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
        .form-control-sm::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        @media (max-width: 992px) {
          .glassmorphism-nav {
            order: -1;
            margin-bottom: 1rem;
            width: 100%;
          }
          .book-jet-text,
          .book-jet-btn {
            width: 100%;
            text-align: center;
            margin-bottom: 0.5rem;
          }
        }
        @media (max-width: 768px) {
          .custom-title {
            font-size: 2rem;
          }
          .custom-lead {
            font-size: 1rem;
          }
          .glassmorphism-nav .nav-link {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
          .book-jet-btn {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
        }
        @media (max-width: 576px) {
          .custom-title {
            font-size: 1.8rem;
          }
          .custom-lead {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Home;