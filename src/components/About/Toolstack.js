import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h5>Linux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>Visual Studio Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <h5>Jupyter Notebook</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <h5>Intellij IDEA</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
