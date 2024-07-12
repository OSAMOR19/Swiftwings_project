import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Container, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import NavBar from "./Nav";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import imgpattern from "../Images/homeimage.svg";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  const gradientBackgroundStyle = {
    background: "linear-gradient(360deg,  #FFEADE 20%, #FCFCFC 100%)",
  };
  return (
    <React.Fragment>
      <section
        className="section pb-0 hero-section"
        id="home"
        style={gradientBackgroundStyle}
      >
        <div className="bg-overlay bg-overlay-pattern"></div>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} lg={8}>
              <div className="text-center text-light mt-4 mt-lg-5 pt-5">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center mb-4">
                  <Button
                    className="btn rounded-pill get-started-btn mb-3 mb-sm-0"
                    style={{ backgroundColor: "#FF7223", color: "white", border: "none" }}
                  >
                    Get Started
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Button>
                  <span className="small-text w-0 text-dark mt-2 mt-sm-0 ms-sm-3">
                    Join our waitlist to receive exclusive updates and launch
                    news about CurateLearn
                  </span>
                </div>
                <h1 className={`display-10 fw-bold mb-3 text-dark lh-base custom-title ${animate ? 'animate-slide-in' : ''}`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Elevate your learning experience with AI-curated resources tailored to your goals.
                </h1>
                <p className="lead text-break text-dark custom-lead"
                   style={{ fontFamily: 'Mulish, sans-serif' }}>
                  Supercharge your self-learning adventure with AI-curated resources, personalized learning spaces, and state-of-the-art tools.
                </p>
                <div className="d-flex justify-content-center mt-4 mb-2">
                  <Button
                    className="btn btn-primary"
                    style={{ background: "#101010" }}
                  >
                    Join Waitlist{" "}
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="mt-2 mt-sm-2 mb-0 pt-sm-2 mb-sm-n3">
          <Col>
            <div className="demo-img-patten-bottom px-5 mx-2">
              <img src={imgpattern} className="img-fluid" alt="..." />
            </div>
          </Col>
        </Row>
      </section>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Mulish&display=swap');

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
          margin-bottom: -1px; /* Removes the gap at the bottom */
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