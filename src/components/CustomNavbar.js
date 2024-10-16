import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-center">
      <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
        <img
          src={logo} // Use the imported logo here
          alt="CSEA Logo"
          style={{ width: '90px', height: '90px' }} // Adjust size as needed
          className="d-inline-block align-top me-2" // Add right margin for spacing
        />
        CSEA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/home" className="mx-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="mx-3">About</Nav.Link>
          <Nav.Link as={Link} to="/announcements" className="mx-3">Announcements</Nav.Link>
          <Nav.Link as={Link} to="/winners" className="mx-3">Winners</Nav.Link>
          <Nav.Link as={Link} to="/scoreboard" className="mx-3">Scoreboard</Nav.Link>
          <Nav.Link as={Link} to="/gallery" className="mx-3">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/office-bearers" className="mx-3">Office Bearers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
