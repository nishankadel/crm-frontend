import React from "react";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="info" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CRM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Dashboard</Nav.Link>
              <Nav.Link href="#link">Ticket</Nav.Link>
              <Nav.Link href="#link">Logout</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
