import React from "react";
import "./Button.scss";

const Button = ({ btnText, onClickFunc }) => {
  return (
    <>
      <button className="btnText" onClick={onClickFunc}>
        {btnText}
      </button>
    </>
  );
};

export default Button;
