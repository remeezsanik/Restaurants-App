import React from "react";
import { Container, Nav, Navbar, } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect>
      <Container>
        <Link style={{ textDecoration: 'none' }} to={"/"}>
          <Navbar.Brand>RESTAURANTS</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link style={{ textDecoration: 'none' }} to={"/"}>
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default Header;
