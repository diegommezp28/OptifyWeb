import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { Row, Col, Container, Navbar } from "react-bootstrap";
// import "./styles/Navbar.css";

const CustomNavbar = (props: any) => {
  return (
    <Navbar className="p-0" fixed="top">
      <Col>
        <Row xs={12}>
          <nav
            id="navigation-bar"
            className="p-0 d-flex justify-content-start align-items-center"
          >
            <Link to="/" id="navbar-brand" className="ml-5">
              Optify
            </Link>
          </nav>
        </Row>
        <Row>
          <Navbar id="bottom-NavBar" className="d-flex justify-content-center">
            <Link
              smooth
              className="nav-link"
              to="/#why"
              activeClassName="active-link"
            >
              <a>Why</a>
            </Link>
            <Link
              smooth
              className="nav-link"
              to="/#how"
              activeClassName="active-link"
            >
              <a>But how?</a>
            </Link>
            <Link
              smooth
              className="nav-link"
              to="/#customize"
              activeClassName="active-link"
            >
              <a>Customize</a>
            </Link>
            <Link
              smooth
              className="nav-link"
              to="/#demo"
              activeClassName="active-link"
            >
              <a>Demo</a>
            </Link>
          </Navbar>
        </Row>
        {/* <hr
          style={{
            color: "black",
            backgroundColor: "black",
            height: 5,
          }}
        ></hr> */}
      </Col>
    </Navbar>
  );
};

export default CustomNavbar;
