import React from "react";
import logo from "../../imgs/Brand.png";
import {Col, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

const logoStyle = {
  height: "55%",
  width: "55%",
  marginLeft: "15px",
};

const Logo = () => {
  return (
    <>
      <Navbar>
        <Col>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h2>DartCart</h2>
          </Link>
        </Col>
        <Col>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div style={{ textAlign: "left" }}>
            <img
              className="logo-img"
              style={logoStyle}
              src={logo}
              alt="logo"
            ></img>
          </div>
        </Link>
        </Col>
      </Navbar>
    </>
  );
};

export default Logo;
