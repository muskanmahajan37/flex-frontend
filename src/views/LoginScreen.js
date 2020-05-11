import React, { useState, useEffect } from "react";

// Styling
import "../style/login.css";

// Components
import Form from "react-bootstrap/Form";

// React-router
import { Redirect, withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { login } from "../store/auth/thunks";

const LoginScreen = ({ login, isAuthenticated }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassowrd] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    login(user);
  };

  return (
    <div className="wrapper">
      {isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <>
          <div className="first-half">
            <p className="login-text">Sign In</p>
            <div className="form-wrapper">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <input
                    type="email"
                    placeholder="Email"
                    className="custom-input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <input
                    type="password"
                    placeholder="Password"
                    className="custom-input2"
                    onChange={(e) => setPassowrd(e.target.value)}
                  />
                </Form.Group>
                <p className="forgot-password">Forgot password?</p>
                <button className="login-button" type="submit">
                  Submit
                </button>
              </Form>
            </div>
          </div>
          <div className="second-half">
            <p className="welcome-text">Welcome to</p>
            <p className="flex-text">Frelance Expert</p>
            <div className="white-line" />
            <p className="desc-text">Freelance platform</p>
          </div>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginScreen));
