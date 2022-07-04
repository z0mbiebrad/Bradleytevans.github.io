import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import shreddit from "../../images/shreddit.png";
import horiseon from "../../images/horiseon.jpg";
import cultural from "../../images/landingBG.jpg"
import ipa from "../../images/APIs-For-IPAs.png";
import notes from "../../images/notes.png";
import code from "../../images/code-quiz.png";
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
          <div className="con1 h3">
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
                  <Card.Title><a href="https://github.com/JulioRios15/Cultural-eats" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={30} /> Repository </a></Card.Title>
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
                  <Card.Title><a href="https://github.com/sdesire/APIs-For-IPAs/" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /> Repository </a></Card.Title>
                </Card>
              </Col>
              </Row>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
