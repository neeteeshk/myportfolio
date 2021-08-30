import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Codeforces from "codeforces-api";
import axios from "axios";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";

function CodingProfile() {
  const uri = "https://codeforces.com/api/user.rating?handle=neeteesh205";
  const [codeforcesRating, upadteCodeforcesRating] = useState(0);
  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteCodeforcesRating(res.data.result[res.data.result.length-1].newRating);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://leetcode.com/neeteesh205/"
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiLeetcode />
          <h5>Leetcode</h5>
        </Col>
      </a>
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://codeforces.com/profile/neeteesh205"
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiCodeforces />
          <h5>Codeforces</h5>
          <h5>Rating : {codeforcesRating}</h5>
        </Col>
      </a>
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.codechef.com/users/neeteesh_321"
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiCodechef />
          <h5>Codechef</h5>
        </Col>
      </a>
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.hackerrank.com/neeteesh205"
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiHackerrank />
          <h5>Hackerrank</h5>
        </Col>
      </a>
    </Row>
  );
}

export default CodingProfile;
