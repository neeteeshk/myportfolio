import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SOFTWARE DEVELOPMENT ENGINEER - APPLICATION"
              date="July 2021 - Present"
              organization="ZS Associates  |  "
              content={[
                "Working with Platform Foundation team",
                "Working on Authentication and Authorization IDM project using OAuth 2.0 and Okta.",
                "Tools – Java, OAuth 2.0",
              ]}
            />
            <Resumecontent
              title="SOFTWARE DEVELOPMENT INTERN"
              date="January 2021 - July 2021"
              organization="Amazon  |  "
              content={[
                "Worked with Tax Platform Services Team of Amazon Hyderabad.",
                "Help onboarding new countries for tax calculation and invoice generation.",
                "Onboarded a new country on Amazon’s Invoice Generation platform. ",
                "Designed & implemented an end-to-end tool to get some list on UI in pagination format and in downloadable CSV format by querying in backend.",
                "Tools-- Lambda, Dynamo Db, S3, Athena and various other AWS service. Used Java & Spring Framework for implementing backend APIs and used React and Typescript for implementing User Interface.",
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="ELECTRONICS AND COMMUNICATION ENGINEERING"
              date="2017 - 2021"
              organization="Maulana Azad National Institute of Technology  |  "
              content={[`CGPA: 7.86`]}
            />
            <Resumecontent
              title="12TH CBSE Board"
              organization="Jawahar Navodaya Vidyalaya Siwan  |  "
              date="2014 - 2016"
              content={["Precentage: 89.2%"]}
            />
            <Resumecontent
              title="10TH CBSE Board"
              organization="Jawahar Navodaya Vidyalaya Khagaria  |  "
              date="2013 - 2014"
              content={["CGPA: 9.8"]}
            />
            <Resumecontent
              title="Achievements"
              content={[
                "Highest Rating of 1912 on Codechef",
                "Ranked 98/10000 in hackerearth october'2017 circuit contest",
                "National Means Cum Merit Scholarship Exam - Among top performers who got scholarship",
                "Got 99 percentile in Jee Mains and Qualified for Jee Advanced",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
