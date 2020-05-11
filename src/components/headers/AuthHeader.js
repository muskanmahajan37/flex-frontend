import React from "react";

// Components
import { Navbar, Nav } from "react-bootstrap";

// React-router
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { logout } from "../../store/auth/thunks";

const AuthHeader = ({ name, logout }) => {
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
        <p className="link" onClick={() => logout()}>
          Logout
        </p>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthHeader);
