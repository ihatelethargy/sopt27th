import React from "react";
import { withRouter } from "react-router-dom";
import { deleteMember } from "../../lib/api/memberAPI";
import "./Card.scss";

const Card = ({ memberData, history, onRemove }) => {
  console.log(history, "체크용");

  const removeCard = async (evt) => {
    evt.stopPropagation();
    try {
      await deleteMember(memberData.id);
      onRemove(memberData.id);
    } catch (e) {}
  };

  return (
    <div
      className="card"
      draggable
      onClick={() => history.push(`/members/${memberData.id}`)} // **
    >
      <div className="remove-button" onClick={removeCard}></div>
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
