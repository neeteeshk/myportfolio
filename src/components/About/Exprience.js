import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAmazon } from "react-icons/si";
import logo from "../../Assets/ZS_Logo.png";

function Exprience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazon />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/amazon/"
        >
            <h5>Amazon</h5>
        </a>
        <h5>Software Development Engineering Intern</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={logo} className="img-fluid logo" alt="ZS"></img>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/zs-associates/"
        >
            <h5>ZS Associates</h5>
        </a>
        <h5>Software Development Engineer Application</h5>
      </Col>
    </Row>
  );
}

export default Exprience;
