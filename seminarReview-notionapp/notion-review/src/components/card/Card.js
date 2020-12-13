import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { Link, Route, useHistory } from "react-router-dom";
import "./Card.scss";
import { withRouter } from "react-router-dom";

const Card = ({ memberData, history }) => {
  console.log(memberData.name);
  console.log(history); // histiry는 route로 온 녀석만 쓸 수 있다.

  return (
    <div
      className="card"
      onClick={() => history.push(`/members/${memberData.id}`)}
      draggable
    >
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

export default withRouter(Card);
