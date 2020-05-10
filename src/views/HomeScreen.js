import React from "react";

// Styling
import "../style/home.css";

// Components
import Header from "../components/Header";
import Card from "../components/Card";

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
        <p className="services-text">Popular services we ofer:</p>
        <div className="card-wrapper">
          <Card
            cardImage={require("../assets/images/web-design.jpg")}
            description="Develop Your Website"
            name="Web Design"
          />
          <Card
            cardImage={require("../assets/images/logo-design.jpg")}
            description="Build Your Brand"
            name="Logo Design"
          />
          <Card
            cardImage={require("../assets/images/seo.jpg")}
            description="Unlock Growth Online"
            name="SEO"
          />
          <Card
            cardImage={require("../assets/images/translation.jpg")}
            description="Go Global"
            name="Translation"
          />
          <Card
            cardImage={require("../assets/images/voice-over.jpg")}
            description="Share your message"
            name="Voice Over"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
