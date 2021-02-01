import React from "react";
import "./about.style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
      <Container>
        <Row className="pt-3 pb-5 align-items-center">
            <Row className=" align-items-start p-2 my-details rounded">
              <div id="about_content">
                Hello! My name is <strong>&nbsp;Vincent Wang.</strong> 
                <br />
                <br />
                Thank you for visiting my portfolio website. This is also my first project built with React.js after several weeks of self-learning.
                <br />
                <br />
                I am a Computer System Co-op student at BCIT seeking co-op
                opportunities. I consider myself a motivated fast-learner and an
                adaptive collaborator.
                <br />
                <br />
                My technical skills include Python, HTML, CSS, JavaScript, React.js,
                Node.js, SQL and MongoDB.
                <br />
                <br />
                My non-technical skills include UX design, product management, business analysis, and  system design.
                <br />
                <br />
                I am actively learning: Java, C, Express and Microsoft SQL
                Server. Additionally, I have 3 years of UX design and product
                management experience in Agile development to strengthen my
                understanding of the connection between programming and business
                operation. This allows me to start contributing to the company's
                operation on day 1.
                <br />
                <br />
                In my spare time, I like badminton, gaming and Kareoke!
                <br />
                <br /> Nice to meet you!
                <br />
                <br />
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
              </div>
            </Row>
        </Row>
      </Container>
    </div>
  );
};

export default About;
