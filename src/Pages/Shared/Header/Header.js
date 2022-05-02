import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="my-header"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} className="text-danger fw-bold" to="/">
            BIKE HOUSE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {/* toggle login and sign out  */}
              {/* {user ? (
                <Nav.Link onClick={() => signOut(auth)} as={Link} to="/login">
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
