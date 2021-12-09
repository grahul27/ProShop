import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      collapseOnSelect
      className="p-2"
    >
      <Navbar.Brand href="/">PROSHOP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/cart">
            Cart <i className="fas fa-shopping-cart"></i>
          </Nav.Link>
          <Nav.Link href="/login">
            SignIn <i className="fas fa-user"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
