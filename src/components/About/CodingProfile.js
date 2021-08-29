import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";

function CodingProfile() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/neeteesh205/">
        <Col xs={4} md={2} className="tech-icons">
          <SiLeetcode />
        </Col>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://codeforces.com/profile/neeteesh205">
        <Col xs={4} md={2} className="tech-icons">
          <SiCodeforces />
        </Col>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.codechef.com/users/neeteesh_321">
        <Col xs={4} md={2} className="tech-icons">
          <SiCodechef />
        </Col>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.hackerrank.com/neeteesh205">
        <Col xs={4} md={2} className="tech-icons">
          <SiHackerrank />
        </Col>
      </a>
    </Row>
  );
}

export default CodingProfile;
