import React from "react";

// Styling
import "../../style/service.css";

const Service = ({ name, username, price }) => {
  return (
    <div className="service-container">
      <div className="service-image"></div>
      <p className="service-name">{name}</p>
      <p className="service-description">{username}</p>
      <p className="service-price">{price}</p>
    </div>
  );
};

export default Service;
