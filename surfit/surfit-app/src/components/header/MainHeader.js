import React from "react";
import Button from "../button/Button";
import "./MainHeader.scss";

const MainHeader = ({ history }) => {
  return (
    <>
      <div className="headerWrapper">
        <Button
          btnText={"Surfit Main"}
          onClickFunc={() => {
            history.push("/");
          }}
        />
        <Button
          btnText={"Surfit Contents"}
          onClickFunc={() => {
            history.push("/contents");
          }}
        />
      </div>
    </>
  );
};

export default MainHeader;
