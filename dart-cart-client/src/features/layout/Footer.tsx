import Navbar from "./Navbar";
import About from "./About";
import SocialMedia from "./SocialMedia";
import UsefulLinks from "./UsefulLinks";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";

export default function Footer() {
  // divs dealing with managing columns were not abstracted away so this area can focus on applying styles correctly

  return (
    <footer className="text-center text-lg-start">
        <section className="footer-info">
        <Container>
        <Row>
          <Col xs={12} md={4}>
              <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
              <Navbar footer="true" />
          </Col>

            <Col xs={12} md={4}>
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <UsefulLinks />
            {/*</div>*/}
          </Col>

            <Col xs={12} md={4}>
              <About />
          </Col>
      </Row>

          <Row>
              <Col xs={12}>
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                  <SocialMedia />
                </div>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                  <div className="text-center mx-auto">
                      © 2022 Dart Cart
                    </div>
              </Col>
          </Row>
        </Container>
        </section>


    </footer>
  );
}
