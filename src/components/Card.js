import React from "react";

// Styling
import "../style/card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.cardImage} className="card-image" />
      <p className="card-description">{props.description}</p>
      <p className="card-name">{props.name}</p>
    </div>
  );
};

export default Card;
