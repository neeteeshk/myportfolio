import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiAmazonaws, SiJava } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h5>Data Structures & Algorithm</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node Js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React Js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5>Mongo DB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>Version Control Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h5>Amazon Web Services</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
