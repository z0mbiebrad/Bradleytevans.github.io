import React from "react";
import { Card } from "react-bootstrap";
import profile from "../../images/Profile-pic.png";
export default function AboutMe() {
  return (
      <Card className="aboutMe" style={{ width: "23rem" }}>
        <Card.Body>
          <Card.Title>About Me</Card.Title>
        
          <img
            className="profile"
            src={profile}
            alt="Brad Evans looking dapper"
            width="300px"
            height="300px"
          ></img>
            <Card.Subtitle className="mb-2 text-muted">
            Get to know more!
          </Card.Subtitle>
          <Card.Text>
            Full Stack Web Developer, passionately organized; I have an amazing eye for detail and
            immensely enjoy bringing ideas to life through excellent design
            work. Team-oriented individual looking to make innovative projects
            through collaboration and great communication.
          </Card.Text>
        </Card.Body>
      </Card>
  );
}
