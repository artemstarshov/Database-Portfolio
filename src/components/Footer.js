import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsGithub,
  BsTelegram,
} from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Artem Starshov</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SAaartem</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/artemstarshov"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/SAaartem"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsTelegram />
              </a>
            </li>      
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
