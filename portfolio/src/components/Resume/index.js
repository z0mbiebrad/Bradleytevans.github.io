import React from "react";
import { Container } from "react-bootstrap";
import { TiHtml5 } from "react-icons/ti";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { SiNodedotjs } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { SiGraphql } from "react-icons/si";
import resume from "../../resumepdf/BradleyEvans.pdf";

export default function Resume() {
  return (
    <Container>
      <section>
        <h1 id="aboutMe"></h1>
        <div className="my-2 text-white">
          <br></br>
          <button className="bg-dark">
          <a href={resume} download className="text-white h3 bootn">
            Download Resume
          </a>
        </button>
        <br></br>
        <br></br>

          <h2>Front-end Proficiencies</h2>
          <ul>
            <li>
              <TiHtml5 /> HTML
            </li>
            <li>
              <SiCss3 /> CSS
            </li>
            <li>
              <SiJavascript /> Javascript
            </li>
            <li>
              <SiJquery /> JQuery
            </li>
            <li>
              <DiResponsive size={35} /> Responsive UI
            </li>
            <li>
              <SiReact /> React
            </li>
            <li>
              <SiBootstrap /> Bootstrap
            </li>
          </ul>
        </div>
        <div className="my-2 text-white">
          <h2>Back-end Proficiencies</h2>
          <ul>
            <li>
              <AiFillApi /> APIs
            </li>
            <li>
              <SiNodedotjs /> Node
            </li>
            <li>
              <DiJavascript1 /> Express
            </li>
            <li>
              <SiMysql /> MySQL <SiSequelize /> Sequelize
            </li>
            <li>
              <SiMongodb /> SiMongodb <DiMongodb /> Mongoose
            </li>
            <li>
              <AiOutlineApi /> REST
            </li>
            <li>
              <SiGraphql /> GraphQL
            </li>
          </ul>
        </div>
       
      </section>
<br></br>
<br></br>
<br></br>
<br></br>



    </Container>
  );
}
