import React from "react";

// Components
import { Navbar, Nav } from "react-bootstrap";

// React-router
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="navbar">
      <Link to="/" className="logo-text">
        FLEX
      </Link>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/login">Sign In</Nav.Link>
        <Nav.Link href="/register">Join</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
