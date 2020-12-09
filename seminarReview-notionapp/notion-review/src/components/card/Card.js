import React from "react";
import "./Card.scss";

const Card = ({ memberData }) => {
  return (
    <div className="card" draggable>
      <div className="remove-button"></div>
      <div className="image-area"></div>
      <div className="card__content card__text name">{memberData.name}</div>
      <div className="card__content card__text instagram">
        {memberData.instagram}
      </div>
      <div className="card__content card__text introduction">
        {memberData.introduce}
      </div>
      <div className="card__content card__text mbti">{memberData.mbti}</div>
    </div>
  );
};

export default Card;
