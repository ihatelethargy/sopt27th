import React from "react";
import "./Card.scss";

const Card = ({ cardContent }) => {
  return (
    <>
      <div className="cardWrapper">{cardContent.title}</div>
    </>
  );
};

export default Card;
