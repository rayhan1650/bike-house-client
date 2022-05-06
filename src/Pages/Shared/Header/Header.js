import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header className="sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="my-header"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} className="text-dark fw-bold" to="/">
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
              {user && (
                <>
                  <Nav.Link as={Link} to="/manageinventories">
                    Manage Inventories
                  </Nav.Link>
                  <Nav.Link as={Link} to="/additem">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myitems">
                    My Items
                  </Nav.Link>
                </>
              )}
              {/* toggle login and sign out  */}
              {user ? (
                <Nav.Link onClick={() => signOut(auth)} as={Link} to="/login">
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
