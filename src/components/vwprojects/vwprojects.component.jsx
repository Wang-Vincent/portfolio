import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import p1 from "../../assets/img/projects/p1.jpg";
import p2 from "../../assets/img/projects/p2.jpg";
import p3 from "../../assets/img/projects/p3.jpg";
import p4 from "../../assets/img/projects/p4.jpg";

import "./vwprojects.styles.css";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details pb-3">PROJECTS</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={p1} />
          <Card.Body>
            <Card.Title>Library Management System</Card.Title>
            <Card.Text></Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <strong>Discription: </strong> This is a Python course
                assignment project, a text-based library management system that
                allowed users to search books by keywords or move books.
                Restrictions were set to ensure books can only be moved between
                valid shelves or locations. Users could save their changes by
                reading/writing the modified records on a txt file.
              </ListGroupItem>
              <ListGroupItem>
                <strong>Tech Used: </strong> Python
              </ListGroupItem>
              <ListGroupItem>
                <strong>Completion Date: </strong> November 2020
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/vwparadox/Library-Management-System">
              GitHub Repo
            </Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={p2} />
          <Card.Body>
            <Card.Title>Group To-Do List</Card.Title>
            <Card.Text></Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <strong>Discription: </strong> This is a web course assignment
                project, a simple to-do list for group members to register as
                users and take private or public notes. public notes are visible
                by the whole group while private notes can be view by its
                creater only. Node.js and MongoDB were used to set up the
                database backend.
              </ListGroupItem>
              <ListGroupItem>
                <strong>Tech Used: </strong> JavaScript, Node.js, MongoDB and
                Nodemon
              </ListGroupItem>
              <ListGroupItem>
                <strong>Completion Date: </strong> December 2020
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/vwparadox/">
              GitHub Repo
            </Card.Link>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={p3} />
          <Card.Body>
            <Card.Title>2-Players Yahtzee Dice Game</Card.Title>
            <Card.Text></Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <strong>Discription: </strong> This is a Python Hackathon Final
                Project completed in intensed duration of 6 hours. 2 players are
                able to play a Yahtzee dice game against each other in a Python
                terminal. Regex was used to check the dice patterns. Each time a
                player scores, it would be recorded in a virtual scorecard
                (list). Player with the higher final score wins. Please refer to {" "}
                <Card.Link href="https://en.wikipedia.org/wiki/Yahtzee">
                  Wikipedia
                </Card.Link>{" "}
                for detailed rules.
              </ListGroupItem>
              <ListGroupItem>
                <strong>Tech Used: </strong> Python
              </ListGroupItem>
              <ListGroupItem>
                <strong>Completion Date: </strong> December 2020
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/vwparadox/2-Players-Dice-Game-Yahtzee">
              GitHub Repo
            </Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={p4} />
          <Card.Body>
            <Card.Title>Shougang Intelligent Supply Chain Platform</Card.Title>
            <Card.Text></Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <strong>Discription: </strong> This is a work project I
                participated during my time in China. This project is a
                digitalized solution for Shougang group to provide uninterrupted
                supplies and just-in-time (JIT) inventory controls of steel
                commodities for its clients. I was responsible for the overall
                UX design of order predictions and shortage warning system.
              </ListGroupItem>
              <ListGroupItem>
                <strong>Tool Used: </strong> Axure RP and Tencent Agile Development Platform (TAPD)
              </ListGroupItem>
              <ListGroupItem>
                <strong>Participation Time: </strong> 2017 - 2018
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://imp.shougang.com.cn/">
              Website
            </Card.Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Projects;
