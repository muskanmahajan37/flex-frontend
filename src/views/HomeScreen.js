import React from "react";

// Styling
import "../style/home.css";

// Components
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <div className="hero">
        <div className="hero-wrapper">
          <p className="moto">Find your perfect solution</p>
          <input
            type="text"
            className="search-input"
            placeholder='Try "Software Developer"'
          />
        </div>
        <img src={require("../assets/images/img.png")} className="hero-image" />
      </div>
      <div className="second">
        <p>Second part</p>
      </div>
    </div>
  );
};

export default HomeScreen;
