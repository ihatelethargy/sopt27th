import React from "react";
import { withRouter } from "react-router-dom";
import "./Card.scss";

const Card = ({ memberData, history }) => {
  console.log(history, "체크용");
  return (
    <div
      className="card"
      draggable
      onClick={() => history.push(`/members/${memberData.id}`)} // **
    >
      <div className="remove-button"></div>
      <div className="image-area">
        <img src={memberData.profileUrl} alt="profile" />
      </div>
      <div className="card__content card__text name">{memberData.name}</div>
      <div className="card__content card__text instagram">
        {memberData.instagram}
      </div>
      <div className="card__content card__text introduction">
        {memberData.introduction}
      </div>
      <div className="card__content card__text mbti">{memberData.mbti}</div>
    </div>
  );
};

export default withRouter(Card);
