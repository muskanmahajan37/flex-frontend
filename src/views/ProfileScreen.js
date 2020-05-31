import React from "react";

// Styling
import "../style/profile.css";

// Components
import Header from "../components/headers/Header";
import CategoryHeader from "../components/headers/CategoryHeader";

const ProfileScreen = () => {
  return (
    <div className="parent">
      <Header />
      <CategoryHeader />
      <h1>Profile screen</h1>
    </div>
  );
};

export default ProfileScreen;
