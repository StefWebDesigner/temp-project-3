import "../styles.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Nav from "./Navbar";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../common/types";

const Header = (props) => {


    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const user =
        useSelector((state: RootState) => state.authentication.user) || "";



    useEffect(() => {
        if (user) {
            const u = JSON.parse(user);
            setName(u.firstName);
        }
    }, [user]);



  return (
    <Navbar>
        <Container>
      <header
        className="navbar navbar-expand-lg navbar-fixed-top navbar-custom"
      >
          <Col>
                <Logo />
          </Col>

          <Col>
            <Searchbar />
          </Col>

          {!props.footer ? (
                  <Col>
                      <li className="nav-item-mb-3 nav-item user-display">
                          <h3 className="user-display">Welcome {name}</h3>
                      </li>
                  </Col>
          ) : (
              ""
          )}

          <Col xs={12} md={4}>
            <Nav />
          </Col>
      </header>
        </Container>
    </Navbar>
  );
};

export default Header;
