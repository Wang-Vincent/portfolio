import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./vwcontacts.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details pb-3">CONTACT</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/wang-vincent/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/vwparadox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="GitHub">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info" title="Resume">
                  <i className="fas fa-file-alt"></i> Resume
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="mailto:vincentwang@alumni.ubc.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="vincentwang@alumni.ubc.ca"
                >
                  <i className="fas fa-envelope-square"></i> Email
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
