import React, { useState, Fragment } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  TabPane,
  Nav,
  CardBody,
  TabContent,
} from "reactstrap";
import avatar1 from "../Images/selflearn1.svg";
import avatar2 from "../Images/selflearn2.svg";
import avatar3 from "../Images/selflearn3.svg";
import avatar4 from "../Images/selflearn4.svg";
import avatar5 from "../Images/selflearn.svg";
import { NavItem, NavLink } from "react-bootstrap";
import classnames from "classnames";

const Services = () => {
  const [animationNavTab, setAnimationNavTab] = useState("1");
  const animationNavToggle = (tab) => {
    if (animationNavTab !== tab) {
      setAnimationNavTab(tab);
    }
  };

  const tabItems = [
    "Personalised learning space",
    "AI Currated Resources",
    "Customised Curriculum",
    "AI Mentor",
    "Integrated IDE",
  ];

  const cardStyle = {
    background:
      "radial-gradient(circle at center, rgba(29, 179, 251, 0.1) 0%, rgba(153, 129, 232, 0.1) 50%, rgba(195, 65, 197, 0.1) 100%)",
    borderRadius: "25px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const cardHeaderStyle = {
    background:
      "linear-gradient(180deg, #FFFFFF 40%, rgba(252, 252, 252, 0) 100%)",
    padding: "20px",
    paddingBottom: "40px",
  };

  return (
    <Fragment>
      <section id="services" style={{ background: "#FFFFFF" }}>
        <Container>
          <Row>
            <Col className="col-12 mb-5">
              <div className="justify-content-between d-flex align-items-center mt-3 mb-4"></div>
              <Row className="justify-content-center mt-3">
                <Col lg={8}>
                  <div className="text-center pt-5 text-dark mb-5">
                    <h1 className="fw-bold"
                    style={{ fontFamily: "Poppins, sans-serif" }}>A Platform for Self-Learners</h1>
                    <p
                      className="lead text-break text-muted custom-lead"
                      style={{ fontFamily: "Mulish, sans-serif" }}
                    >
                      Empower Your Self-Learning Journey with a Wealth of
                      Resources and Personalized Tools. Making Self-Learning
                      Easy.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col xxl={11}>
                  <div className="nav-container">
                    <Nav
                      pills
                      className="nav nav-pills animation-nav nav-justified mb-3 flex-nowrap overflow-auto"
                    >
                      {tabItems.map((text, index) => (
                        <NavItem
                          className="nav-item flex-shrink-0 mx-1"
                          key={index}
                        >
                          <NavLink
                            className={classnames({
                              active:
                                animationNavTab === (index + 1).toString(),
                              "nav-link": true,
                            })}
                            onClick={() => {
                              animationNavToggle((index + 1).toString());
                            }}
                            style={{
                              cursor: "pointer",
                              borderRadius: "50px",
                              backgroundColor:
                                animationNavTab === (index + 1).toString()
                                  ? "#FF7223"
                                  : "transparent",
                              color:
                                animationNavTab === (index + 1).toString()
                                  ? "white"
                                  : "#333333",
                              padding: "10px 20px",
                              transition: "all 0.3s ease",
                              border:
                                animationNavTab === (index + 1).toString()
                                  ? "none"
                                  : "1px solid #eeeeee", // Changed the border color to a muted light gray
                              whiteSpace: "nowrap",
                            }}
                          >
                            {text}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </div>

                  <TabContent
                    activeTab={animationNavTab}
                    className="text-muted"
                  >
                    {tabItems.map((item, index) => (
                      <TabPane
                        tabId={(index + 1).toString()}
                        id={`animation-${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        key={index}
                      >
                        <Col className="col-xxl col-12">
                          <Card className="h-100" style={cardStyle}>
                            <div style={cardHeaderStyle}>
                              <CardBody>
                                <h4 className="card-title w- mb-0">
                                  {`0${index + 1} ${item}`}
                                </h4>
                              </CardBody>
                            </div>
                            <div className="p-4">
                              <img
                                className="img-fluid rounded-3"
                                src={
                                  [avatar1, avatar2, avatar3, avatar4, avatar5][
                                    index
                                  ]
                                }
                                alt="Card cap"
                              />
                            </div>
                          </Card>
                        </Col>
                      </TabPane>
                    ))}
                  </TabContent>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-container {
            overflow-x: auto;
          }
          .nav-pills {
            flex-wrap: nowrap !important;
          }
          .nav-item {
            margin-right: 10px;
          }
          .nav-item:last-child {
            margin-right: 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Services;
