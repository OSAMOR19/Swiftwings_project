import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Col,
  Row,
  CardBody,
  Button,
  Fade,
  Form,
  InputGroup,
} from "react-bootstrap";
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

import img1 from "../Images/serviceimg1.png";
import img2 from "../Images/globalaccess.png";
import img3 from "../Images/serviceimg3.png";
import img4 from "../Images/serviceimg2.png";
import img6 from "../Images/teacher.svg";
import img5 from "../Images/curriculumpic.png";

const Services = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setOpen(true);
  }, []);

  const cardStyle = {
    background: "rgba(85, 85, 85, 0.65)",
    transition: "all 0.3s ease-in-out",
    borderRadius: "20px", // More rounded corners
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  };

  const buttonStyle = {
    backgroundColor: "#5C0632",
    border: "none",
    borderRadius: "20px",
    padding: "10px 20px",
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const subscribeCardStyle = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '20px',
    marginTop: '30px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const handleCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter
      ? "translateY(-5px)"
      : "translateY(0)";
    e.currentTarget.style.boxShadow = enter
      ? "0 10px 20px rgba(0, 0, 0, 0.1)"
      : "none";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <React.Fragment>
      <section id="portfolio" className="" style={{ background: "#FFFFF" }}>
        <Container>
          <Row className="justify-content-center mt-3">
            <Col lg={8}>
              <div className="text-center pt-5 text-dark mb-5">
                <p>Our Services</p>
                <h1
                  className="fw-bold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  We offer world a class exotic experience
                </h1>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center gy-4">
            {[
              { img: img1, title: "Group/Corporate Charter", description: "Fly together, work together! We provide Seamless travel for your team. Make your dream come true with Swiftwings private jet charters for groups, companies and corporations" },
              { img: img4, title: "Medical Evacuation", description: "Swiftwings provides swift and secure medical evacuation services. Our private jets are fully equipped for critical care, with experienced medical personnel on board to ensure you receive the best possible care during transport." },
              { img: img3, title: "Air Helicopters", description: "In line with bringing the world closer to you, Swiftwings takes private flight to new heights with our on-demand helicopter charters. Access remote locations, avoid traffic, and land closer to your final destination." }
            ].map((service, index) => (
              <Col md={4} key={index} className="d-flex flex-column align-items-center">
                <Fade in={open}>
                  <Card
                    className="card-animate h-100 w-100"
                    style={cardStyle}
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                  >
                    <img src={service.img} alt="" style={imageStyle} />
                    <CardBody className="d-flex flex-column">
                      <div className="p-3 text-start">
                        <h3 className="text-white">{service.title}</h3>
                        <p
                          className="card-text mb-1 text-start text-light"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Fade>
                <Button className="mb-5" style={buttonStyle}>
                  See More <FaArrowRight style={{ marginLeft: '10px' }} />
                </Button>
              </Col>
            ))}
          </Row>
          
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Services;