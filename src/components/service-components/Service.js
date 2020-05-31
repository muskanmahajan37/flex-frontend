import React from "react";

// Styling
import "../../style/service.css";

const Service = ({ name, username, price, image }) => {
  return (
    <div className="service-container">
      <img className="service-image" src={`http://localhost:8000/images/${image}`} />
      <p className="service-name">{name}</p>
      <p className="service-description">{username}</p>
      <p className="service-price">€{price}</p>
    </div>
  );
};

export default Service;
