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
    <Navbar style={{ padding: 0 }} className="navbar">
      <Link to="/" className="logo">
        FLEX
      </Link>
      <Nav className="ml-auto">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          Switch to selling
        </Link>
        <Link className="link">{name}</Link>
        <Link className="link" onClick={() => logout()}>
          Logout
        </Link>
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
