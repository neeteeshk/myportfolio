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
                "I am part of Platform Foundation team who is making solution for Authentication and Authorization by replacing old solution.",
              ]}
            />
            <Resumecontent
              title="SOFTWARE DEVELOPMENT INTERN"
              date="January 2021 - July 2021"
              organization="Amazon  |  "
              content={[
                "Worked with Tax Platform Services Team of Amazon Hyderabad to help onboarding new countries for tax calculation and invoice generation and designing various internal tools.",
                "Onboarded a new country on Amazon’s Invoice Generation platform. Used Java & Spring Framework, Dynamo DB and Athena",
                "Designed & implemented an end-to-end tool to get some list on UI in pagination format and in downloadable CSV format. Used Lambda, Dynamo Db, S3, Athena and various other AWS service. Used Java & Spring Framework for implementing backend APIs and used React and Typescript for implementing User Interface.",
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
