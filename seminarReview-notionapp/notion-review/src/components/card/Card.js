import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import "./Card.scss";

const Card = ({ memberData }) => {
  console.log(memberData.name);
  return (
    <div className="card" draggable>
      <div className="remove-button">
        <DeleteOutlined />
      </div>
      <div className="image-area">
        {memberData.profileUrl === "" ? (
          "No Img"
        ) : (
          <img src={memberData.profileUrl} alt="memberImg" />
        )}
      </div>
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
