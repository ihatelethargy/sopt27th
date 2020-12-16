import React from "react";
import "./LongCard.scss";

const LongCard = ({ idol }) => {
  return (
    <div className="longcard-wrapper">
      <img src={idol.img} alt="idolImg" />

      <div className="longcardTitle">{idol.name}</div>
      <div className="longcardCount">{idol.count}</div>
    </div>
  );
};

export default LongCard;
