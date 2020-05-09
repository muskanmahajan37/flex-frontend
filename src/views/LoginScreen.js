import React, { useState } from "react";
import axios from "axios";

// Styling
import "../style/login.css";

// Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// React-router
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassowrd] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = JSON.stringify({ email, password });
    axios
      .post("http://localhost:8000/api/auth/login", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper">
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
    </div>
  );
};

export default LoginScreen;
