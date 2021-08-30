import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";

function CodingProfile() {
  const codechefUri =
    "https://competitive-coding-api.herokuapp.com/api/codechef/neeteesh_321";
  const leetcodeUri =
    "https://competitive-coding-api.herokuapp.com/api/leetcode/neeteesh205";
  const codeforcesUri =
    "https://competitive-coding-api.herokuapp.com/api/codeforces/neeteesh205";

  const [codeforcesRating, upadteCodeforcesRating] = useState(0);
  const [codeChefRating, upadteCodeChefRating] = useState(0);
  const [leetCodeRating, upadteLeetCodeRating] = useState(0);

  useEffect(() => {
    axios
      .get(codeforcesUri)
      .then((res) => {
        upadteCodeforcesRating(res.data.["max rating"]);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(codechefUri)
      .then((res) => {
        console.log(res);
        upadteCodeChefRating(res.data.highest_rating);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(leetcodeUri)
      .then((res) => {
        console.log(res);
        upadteLeetCodeRating(res.data.total_problems_solved);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLeetcode />
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://leetcode.com/neeteesh205/"
        >
          <h5>Leetcode</h5>
          <h5>Problem Solved : {leetCodeRating}</h5>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeforces />
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://codeforces.com/profile/neeteesh205"
        >
          <h5>Codeforces</h5>
          <h5>Rating : {codeforcesRating}</h5>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodechef />
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.codechef.com/users/neeteesh_321"
        >
          <h5>Codechef</h5>
          <h5>Rating : {codeChefRating}</h5>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHackerrank />
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.hackerrank.com/neeteesh205"
        >
          <h5>Hackerrank</h5>
          <h5>🌟🌟🌟🌟🌟🌟</h5>
        </a>
      </Col>
    </Row>
  );
}

export default CodingProfile;
