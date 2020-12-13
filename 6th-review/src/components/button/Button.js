import React from "react";
import "./Button.scss";

const Button = ({ text, onClickFunc, textColor = "#444" }) => {
  return (
    <span className="button" style={{ color: textColor }} onClick={onClickFunc}>
      {text}
    </span>
  );
};

export default Button;
