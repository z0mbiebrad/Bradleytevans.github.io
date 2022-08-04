import React from "react";
import {  Container, Card, Col, Row } from "react-bootstrap";
import cultural from "../../images/landingBG.jpg"
import ipa from "../../images/APIs-For-IPAs.png";
import team from "../../images/team.png"
import notes from "../../images/notes.png"
import { VscGithub } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg"

export default function Portfolio() {
  return (
    <div>
      <br></br>
      <section>
        <h1 id="projects" className="text-white">Projects</h1>
        <div className="my-2">
            <br></br>
          <Container className="con1 h3">
            <Row>
              <Col className="projCard">
                  <Card className="bg-dark text-white"  style={{ width: "23rem" }}>
                    <Card.Title><a href="https://cultural-eats.herokuapp.com" target="_blank" rel="noreferrer" className="text-white"><CgWebsite size={30} /> Cultural-Eats </a></Card.Title>
                    <a class="Card.Img" href="https://cultural-eats.herokuapp.com">
                    <Card.Img
                      src={cultural}
                      alt="Card image"
                    />
                    </a>
                    <p>
                      A collaborative project that allows the user to search for recipes around the world with their preferred ingredients.
                    </p>
                    <Card.Title><a href="https://github.com/JulioRios15/Cultural-eats" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /> Repository </a></Card.Title>
                  </Card>
                </Col>
                <Col className="projCard">
                  <Card className="bg-dark text-white"  style={{ width: "23rem" }}>
                    <Card.Title><a href="https://sdesire.github.io/APIs-For-IPAs/" target="_blank" rel="noreferrer" className="text-white"><CgWebsite size={30} /> IPA's for API's </a> </Card.Title>
                    <a class="Card.Img" href="https://sdesire.github.io/APIs-For-IPAs/">
                    <Card.Img
                      src={ipa}
                      alt="Card image"
                    />
                    </a>
                    <p>
                      A project that allows the user to search for local breweries in their desired location, as well as getting a weather report.
                    </p>
                    <Card.Title><a href="https://github.com/sdesire/APIs-For-IPAs/" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /> Repository </a></Card.Title>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="projCard">
                  <Card className="bg-dark text-white"  style={{ width: "23rem" }}>
                    <Card.Title><a href="https://github.com/Bradleytevans/Team-Profile-Gen" target="_blank" rel="noreferrer" className="text-white"><CgWebsite size={30} /> Team Profile Generator </a> </Card.Title>
                    <a class="Card.Img" href="https://github.com/Bradleytevans/Team-Profile-Gen">
                    <Card.Img
                      src={team}
                      alt="Card image"
                    />
                    </a>
                    <p>
                      A Javascript program that uses NodeJS that easily allows the user to add members to there team and create profile cards.
                    </p>
                    <br></br>
                    <Card.Title><a href="https://github.com/Bradleytevans/Team-Profile-Gen" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /> Repository </a></Card.Title>
                  </Card>
                </Col>
                <Col className="projCard">
                  <Card className="bg-dark text-white"  style={{ width: "23rem" }}>
                    <Card.Title><a href="https://github.com/Bradleytevans/notes-on-notes" target="_blank" rel="noreferrer" className="text-white"><CgWebsite size={30} /> Note Taker </a> </Card.Title>
                    <a class="Card.Img" href="https://github.com/Bradleytevans/notes-on-notes">
                    <Card.Img
                      src={team}
                      alt="Card image"
                    />
                    </a>
                    <p>
                      A note taking application that allows the user to store and delete notes. It was built using express and deployed live with heroku.
                    </p>
                    <Card.Title><a href="https://github.com/Bradleytevans/notes-on-notes" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /> Repository </a></Card.Title>
                  </Card>
                </Col>
              </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}
