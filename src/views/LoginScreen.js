import React from "react";

// Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Styling
import "../style/login.css";

const LoginScreen = () => {
  return (
    <div className="wrapper">
      <div className="first-half">
        <p className="login-text">Sign In</p>
        <Form className="form-wrapper">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="second-half">
        <p className="welcome-text">Welcome to</p>
        <p className="flex-text">Frelance Expert</p>
        <div className="white-line" />
        <p className="desc-text">Freelance platform</p>
      </div>
    </div>
  );
};

export default LoginScreen;
