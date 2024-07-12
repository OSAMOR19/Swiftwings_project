import React from "react";
import {
  Col,
  Container,
  Row,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import staffs from "../Images/staffspic.svg";

const Services = () => {
  const [open, setOpen] = React.useState("0");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <React.Fragment>
      <section id="faq" style={{ background: "#FFFFFF" }}>
        <Container>
          <Row>
            <Col className="col-12">
              <div className="justify-content-between d-flex align-items-center mt-3 mb-4"></div>

              <Row className="justify-content-center mt-3">
                <Col lg={8}>
                  <div className="text-center pt-5 text-dark mb-5">
                    <h1 className="fw-bold">Frequently Asked Questions</h1>
                    <p className="mb-4 ff-secondary">
                      Our mission is to create a supportive environment where
                      individuals with a shared enthusiasm can come..
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-center mb-5">
                <Col lg={8}>
                  <Accordion open={open} toggle={toggle}>
                    <AccordionItem>
                      <AccordionHeader targetId="1">
                        Are you creating the content?
                      </AccordionHeader>
                      <AccordionBody accordionId="1">
                        No, we dont create the content. We online curate
                        contents already available on the internet for you to
                        use.
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="2">
                        Can I upload my own resources?
                      </AccordionHeader>
                      <AccordionBody accordionId="2">
                        Yes, you can upload recourses from YouTube, Google
                        drive, drobox etc
                      </AccordionBody>
                    </AccordionItem>
                  </Accordion>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <Row className="mt-2 mt-sm-2 mb-0 pt-sm-2 mb-sm-n3">
            <Col>
              <div className="demo-img-patten-bottom px-5 mx-2">
                <img src={staffs} className="img-fluid" alt="..." />
              </div>
            </Col>
          </Row>
    </React.Fragment>
  );
};

export default Services;
