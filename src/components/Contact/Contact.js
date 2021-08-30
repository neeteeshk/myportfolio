import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_jwa2yuo", "template_02udyv9", e.target, "user_CmNhG8fRFjpgwS3iTi3KK").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Container fluid className="contact-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              Contact Me <strong className="purple">Here</strong>
            </h1>
          </Col>
        </Row>
      </Container>

      <form onSubmit={sendEmail}>
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </Col>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                required
              />
            </Col>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
            </Col>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
                required
              ></textarea>
            </Col>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <input
                type="submit"
                value="Send Message"
                id="submitBtn"
              ></input>
            </Col>
          </Row>
        </Container>
      </form>
    </Container>
  );
}

export default Contact;
