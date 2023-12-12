import React from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";

function NavbarComponents() {
  const expand = "md";

  const links = [
    { href: "#action1", text: "Home" },
    { href: "#action2", text: "Link" },
    { href: "#action2", text: "Link" },
    { href: "#action2", text: "Link" },
    // Tambahkan link-link lain sesuai kebutuhan
  ];

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-dark mb-3 text-white">
        <Container>
          <Navbar.Brand href="#" className="bg-dark text-danger fs-1">
            Netflix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Netflix</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-dark text-white">
              <Nav className="justify-content-center flex-grow-1 pe-3 mb-2 mb-lg-0">
                {links.map((link, index) => (
                  <Nav.Link key={index} href={link.href} className="text-white text-center">
                    {link.text}
                  </Nav.Link>
                ))}
                <NavDropdown title="Dropdown" className="text-white" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="danger">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponents;
