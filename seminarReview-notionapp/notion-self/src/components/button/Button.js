import React from "react";
import "./Button.scss";

const Button = ({ onClickFunc, text }) => {
  return (
    <>
      <button className="button" onClick={onClickFunc}>
        {text}
      </button>
    </>
  );
};

export default Button;
