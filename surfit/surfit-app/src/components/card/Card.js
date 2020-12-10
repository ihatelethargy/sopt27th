import React from "react";
import "./Card.scss";

const Card = ({ cardContent }) => {
  return (
    <>
      <div className="cardWrapper">
        <img
          className="card__content__img"
          src={cardContent.contentUrl}
          alt="card-img"
        />
        <div className="card__content__text">
          <div className="card__content__title card_font">
            {cardContent.title}
          </div>
          <div className="card__content__desc card_font">
            {cardContent.description}
          </div>
          <div className="card__content__hashtag card_font">
            {cardContent.hashtag}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
