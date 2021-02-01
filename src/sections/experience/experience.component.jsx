import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Yidu from "../../assets/img/experience/yidu.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details pb-3">EXPERIENCE</h1>
      <Jumbotron>
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Yidu} alt="Yidu logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Digital Product Manager</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Shanghai Yidu Technology Co.,Ltd.</strong>
                    <br />
                    <strong>Duration:</strong> July 2016 - August 2019
                    <br/>
                    <br />
                    <strong>Company Discription</strong> 
                    <br/> Yidu Technology Co., Ltd. is a Software-as-a-Service (SaaS) company that provides digitalized solutions for China’s largest steel companies (such as Shougang Group and Baotou Steel Group, etc.). The main products include E-commerce trading platforms and online supply chain platforms. These platform would help steel companies to sell steel commodities or establish uninterrupted supplies to customers.
                    <br />
                    <br />
                    <strong> My Responsibilities </strong>
                    <ul className="text-left">
                      <li><strong>Managed</strong> product requirements of projects in Agile Development iterations with Tencent Agile Product Development (TAPD) platform.</li>
                      <li><strong>Communicated and explained</strong> with developers, designers, and testers constantly to ensure their understanding of the functions and architecture of requirements.
                      </li>
                      <li><strong>Designed</strong> demo prototypes with Axure RP or Balsimiq Mockups to present UX of trading work flow, commodity listings, and other functions.
                      </li>
                      <li><strong>Cooperated</strong> with testing team in gray-box testings After iterations were launched to ensure that the required functions operate correctly in the production environment. 
                      </li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;