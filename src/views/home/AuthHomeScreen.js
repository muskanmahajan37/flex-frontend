import React from "react";

// Styling
import "../../style/home.css";

// Components
import Header from "../../components/headers/Header";
import Card from "../../components/Card";

const AuthHomeScreen = () => {
  return (
    <div className="parent">
      <Header />
      <h1>Home screen logged in</h1>
    </div>
  );
};

export default AuthHomeScreen;
