import React from "react";

// Components
import { Navbar, Nav } from "react-bootstrap";

// React-router
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

const AuthHeader = ({ name }) => {
  return (
    <Navbar className="navbar">
      <Link to="/">
        <img src={require("../../assets/images/logo.png")} height={50} />
      </Link>
      <Nav className="ml-auto">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          Switch to selling
        </Link>
        <Link className="link">
          <p>{name}</p>
        </Link>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
});

export default connect(mapStateToProps)(AuthHeader);
