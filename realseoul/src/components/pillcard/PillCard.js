import React from "react";
import "./PillCard.scss";

const PillCard = ({ contentData }) => {
  console.log(contentData, "이거 데이타 하나짜리임");
  return (
    <div className="pillcard-wrapper">
      <div className="pillcardEmoji">{contentData.emoji}</div>
      <div className="text">
        <div className="pillcardTitle">{contentData.title}</div>
        <div className="pillcardCount">{contentData.count}</div>
      </div>
    </div>
  );
};

export default PillCard;
