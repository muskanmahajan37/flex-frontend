import React from "react";

// Styling
import "../style/notfound.css";

// Components
import Header from "../components/Header";

const NotFoundScreen = () => {
  return (
    <div>
      <Header />
      <div className="center">
        <h1>You're lost buddy!</h1>
      </div>
    </div>
  );
};

export default NotFoundScreen;
