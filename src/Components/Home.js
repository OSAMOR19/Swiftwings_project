// Home.js
import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import NavBar from "./Nav";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import CountUp from "react-countup";
import bgimage from "../Images/betterimage.png";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState('1');

  useEffect(() => {
    console.log("Background image URL:", bgimage);
    setAnimate(true);
  }, []);

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

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
                      <span className="text-light book-jet-text">Book a Jet</span>
                      <Nav pills className="glassmorphism-nav my-2 mx-auto">
                        <NavItem>
                          <NavLink
                            className={activeTab === '1' ? 'active' : ''}
                            onClick={() => { toggle('1'); }}
                          >
                            One Way Trip
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={activeTab === '2' ? 'active' : ''}
                            onClick={() => { toggle('2'); }}
                          >
                            Round Trip
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={activeTab === '3' ? 'active' : ''}
                            onClick={() => { toggle('3'); }}
                          >
                            Multi City Trip
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <Button color="primary" className="book-jet-btn">
                        Book a Jet <i className="ri-right-arrowline"></i>
                      </Button>
                    </div>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <p className="text-light">One Way Trip: Choose your departure city, destination, and date for a single journey.</p>
                      </TabPane>
                      <TabPane tabId="2">
                        <p className="text-light">Round Trip: Select your departure and return dates for a two-way journey.</p>
                      </TabPane>
                      <TabPane tabId="3">
                        <p className="text-light">Multi City Trip: Plan a complex itinerary with multiple stops along your journey.</p>
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
  .get-started-btn {
    min-width: 150px;
    padding: 2px 10px;
    text-align: center;
  }
  .custom-title {
    font-size: 3rem;
    line-height: 1.2;
    opacity: 0;
  }
  .custom-lead {
    font-size: 1.2rem;
  }
  .demo-img-patten-bottom {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .demo-img-patten-bottom img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: -1px;
  }
  .glassmorphism-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .glassmorphism-nav {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 50px;
    padding: 5px;
    background-image: radial-gradient(circle, rgba(131, 131, 131, 0.348) 0%, rgba(33, 33, 33, 0.324) 100%);
  }
  .glassmorphism-nav .nav-link {
    color: white;
    border-radius: 50px;
    padding: 10px 20px;
  }
  .glassmorphism-nav .nav-link.active {
    background-color: rgba(21, 21, 21, 0.43);
    color: white;
  }
  .book-jet-btn {
    border-radius: 50px;
    padding: 10px 20px;
    white-space: nowrap;
    background-color: #5C0632;
    border-color: #5C0632;
  }
  .book-jet-text {
    font-size: 1.2rem;
    font-weight: bold;
    white-space: nowrap;
  }
  @media (max-width: 992px) {
    .glassmorphism-nav {
      order: -1;
      margin-bottom: 1rem;
      width: 100%;
    }
    .book-jet-text, .book-jet-btn {
      width: 100%;
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }
  @media (max-width: 576px) {
    .custom-title {
      font-size: 2rem;
    }
    .custom-lead {
      font-size: 1rem;
    }
  }
`}</style>
    </React.Fragment>
  );
};

export default Home;