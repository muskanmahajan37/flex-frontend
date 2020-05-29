import React from "react";

// Components
import { Navbar, Nav } from "react-bootstrap";

// React-router
import { Link } from "react-router-dom";

const GuestHeader = () => {
  return (
    <Navbar style={{ padding: 0, paddingTop: "1%" }} className="navbar">
      <Link to="/" className="logo">
        FLEX
      </Link>
      <Nav style={{ padding: 0 }} className="navbar ml-auto">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/login" className="link">
          Sign In
        </Link>
        <Link to="/register" className="register-link">
          Join
        </Link>
      </Nav>
    </Navbar>
  );
};

export default GuestHeader;
