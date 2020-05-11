import React from "react";

// Components
import { Navbar, Nav } from "react-bootstrap";

// React-router
import { Link } from "react-router-dom";

const GuestHeader = () => {
  return (
    <Navbar className="navbar">
      <Link to="/">
        <img src={require("../../assets/images/logo.png")} height={50} />
      </Link>
      <Nav className="ml-auto">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/login" className="link">
          Sign In
        </Link>
        <Link to="/register" className="link">
          Join
        </Link>
      </Nav>
    </Navbar>
  );
};

export default GuestHeader;
